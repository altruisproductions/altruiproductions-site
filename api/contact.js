const { createHash } = require('node:crypto');
const { del, get, issueSignedToken, presignUrl } = require('@vercel/blob');

const maxPhotoBytes = 10_000_000;
const photoTypes = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  heic: 'image/heic'
};
const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?\.[a-z]{2,}$/i;
const submissionPattern = /^[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i;

function isSameOrigin(request) {
  const { host, origin } = request.headers;
  if (!host || !origin) return false;
  try {
    const url = new URL(origin);
    return url.host === host && ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
}

function videoLinkIsValid(value) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password;
  } catch {
    return false;
  }
}

function photoFormat(bytes) {
  const ascii = (start, end) => bytes.toString('ascii', start, end);
  if (bytes.length < 12) return '';
  if (bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return 'jpg';
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return 'png';
  if (ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WEBP') return 'webp';
  if (ascii(4, 8) === 'ftyp' && /^(heic|heix|heim|heis|mif1|msf1)$/.test(ascii(8, 12))) return 'heic';
  return '';
}

module.exports = async function contact(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ code: 'method' });
  }
  if (!isSameOrigin(request)) return response.status(403).json({ code: 'origin' });
  if (!/^application\/json(?:;|$)/i.test(request.headers['content-type'] || '')) {
    return response.status(415).json({ code: 'unsupported' });
  }

  const body = request.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return response.status(400).json({ code: 'invalid' });
  }
  if (body.website) return response.status(200).json({ ok: true });

  const text = (value) => typeof value === 'string' ? value.trim() : '';
  const id = text(body.id);
  const email = text(body.email);
  const subject = text(body.subject);
  const message = text(body.message);
  const video = text(body.video);

  if (!submissionPattern.test(id)) return response.status(400).json({ code: 'invalid' });
  if (email.length > 254 || !emailPattern.test(email)) {
    return response.status(400).json({ code: 'invalidEmail' });
  }
  if (!subject || subject.length > 120 || /[\x00-\x1f\x7f]/.test(subject)) {
    return response.status(400).json({ code: 'invalidSubject' });
  }
  if (!message || message.length > 5000) return response.status(400).json({ code: 'invalidMessage' });
  if (video.length > 2048 || !videoLinkIsValid(video)) {
    return response.status(400).json({ code: 'invalidVideo' });
  }

  const { RESEND_API_KEY: apiKey, CONTACT_FROM_EMAIL: from, CONTACT_TO_EMAIL: to } = process.env;
  if (!apiKey || !from || !to) return response.status(503).json({ code: 'unavailable' });

  if (body.step !== 'upload' && body.step !== 'send') {
    return response.status(400).json({ code: 'invalid' });
  }

  // Keep the single-photo request format working for already-open pages.
  const legacyFormat = body.photos === undefined ? body.photo : null;
  let photos = [];
  if (legacyFormat != null) {
    if (typeof legacyFormat !== 'string' || !Object.hasOwn(photoTypes, legacyFormat)) {
      return response.status(400).json({ code: 'photoType' });
    }
  } else if (body.photos !== undefined) {
    if (!Array.isArray(body.photos) || body.photos.some((photo) => (
      !photo || typeof photo.format !== 'string' || !Object.hasOwn(photoTypes, photo.format) ||
      !Number.isSafeInteger(photo.size) || photo.size < 12
    ))) {
      return response.status(400).json({ code: 'photoType' });
    }
    photos = body.photos.map(({ format, size }) => ({ format, size }));
  }

  const totalSize = photos.reduce((total, photo) => total + photo.size, 0);
  if (totalSize > maxPhotoBytes) return response.status(413).json({ code: 'photoSize' });

  const messageDetails = [email, subject, message, video];
  if (photos.length) messageDetails.push(photos);
  const detailsHash = createHash('sha256').update(JSON.stringify(messageDetails)).digest('hex');
  const storageFormat = photos.length ? 'bin' : legacyFormat;
  const pathname = storageFormat ? `contact/${id}/${detailsHash}.${storageFormat}` : null;
  if (body.step === 'upload') {
    if (!pathname) return response.status(400).json({ code: 'photoType' });
    try {
      const constraints = {
        pathname,
        maximumSizeInBytes: totalSize || maxPhotoBytes,
        allowedContentTypes: [photos.length ? 'application/octet-stream' : photoTypes[legacyFormat]],
        validUntil: Date.now() + 5 * 60_000
      };
      const token = await issueSignedToken({ ...constraints, operations: ['put'] });
      const { presignedUrl } = await presignUrl(token, {
        ...constraints,
        operation: 'put',
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        ttlDays: 1
      });
      return response.status(200).json({ uploadUrl: presignedUrl });
    } catch (error) {
      console.error('Contact photo upload unavailable', error.name);
      return response.status(503).json({ code: 'unavailable' });
    }
  }

  const mail = {
    from,
    to: [to],
    reply_to: email,
    subject: `[Contattaci] ${email} — ${subject}`,
    text: `Email del mittente: ${email}\nOggetto: ${subject}\n\n${message}${video ? `\n\nVideo: ${video}` : ''}`
  };

  try {
    if (pathname) {
      const uploaded = await get(pathname, { access: 'private', useCache: false, abortSignal: AbortSignal.timeout(10_000) });
      if (uploaded?.statusCode !== 200) return response.status(409).json({ code: 'uploadFailed' });

      let bytes;
      try {
        if (uploaded.blob.size > maxPhotoBytes) {
          await uploaded.stream.cancel();
          return response.status(413).json({ code: 'photoSize' });
        }
        bytes = Buffer.from(await new Response(uploaded.stream).arrayBuffer());
      } finally {
        try {
          await del(pathname, { ifMatch: uploaded.blob.etag, abortSignal: AbortSignal.timeout(5_000) });
        } catch {
          console.warn('Contact photo cleanup deferred to storage expiry');
        }
      }

      if (bytes.length > maxPhotoBytes) return response.status(413).json({ code: 'photoSize' });
      if (photos.length && bytes.length !== totalSize) {
        return response.status(400).json({ code: 'photoType' });
      }

      const attachments = [];
      let offset = 0;
      for (const { format, size } of (photos.length ? photos : [{ format: legacyFormat, size: bytes.length }])) {
        const image = bytes.subarray(offset, offset + size);
        if (photoFormat(image) !== format) return response.status(400).json({ code: 'photoType' });
        const name = photos.length > 1 ? `photo-${attachments.length + 1}` : 'photo';
        attachments.push({ filename: `${name}.${format}`, content: image.toString('base64') });
        offset += size;
      }
      mail.attachments = attachments;
    }

    const payload = JSON.stringify(mail);
    const hash = createHash('sha256').update(payload).digest('hex');
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `website-contact/${id}/${hash}`
      },
      body: payload,
      signal: AbortSignal.timeout(25_000)
    });
    if (!result.ok) {
      console.error('Contact email rejected', result.status);
      return response.status(502).json({ code: 'delivery' });
    }
    const confirmation = await result.json();
    if (!confirmation.id) return response.status(502).json({ code: 'delivery' });
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact request failed', error.name);
    return response.status(502).json({ code: 'delivery' });
  }
};
