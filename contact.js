(() => {
  const translations = {
    en: {
      title: 'Contact us', close: 'Close', language: 'Language', requiredNote: 'Fields marked * are required.',
      email: 'Your email *', subject: 'Subject *', message: 'Description *', photo: 'Photo (optional)',
      choosePhoto: 'Choose a photo', remove: 'Remove photo', photoHint: 'JPG, PNG, WebP, HEIC · 10 MB max.',
      video: 'Video link (optional)', privacy: 'We use your details and any attachment to respond to your message.',
      send: 'Send message', sending: 'Sending…', success: 'Message sent. Thank you for getting in touch.',
      invalidEmail: 'Enter a valid email address.', invalidSubject: 'Enter a subject of up to 120 characters.',
      invalidMessage: 'Enter a description of up to 5,000 characters.', invalidVideo: 'Enter a valid HTTPS or HTTP video link.',
      photoSize: 'Choose a photo no larger than 10 MB.', photoType: 'Choose a valid JPG, PNG, WebP or HEIC photo.',
      failed: 'Your message couldn’t be sent. Please try again later.'
    },
    it: {
      title: 'Contattaci', close: 'Chiudi', language: 'Lingua', requiredNote: 'I campi contrassegnati con * sono obbligatori.',
      email: 'La tua email *', subject: 'Oggetto *', message: 'Descrizione *', photo: 'Foto (facoltativa)',
      choosePhoto: 'Scegli una foto', remove: 'Rimuovi foto', photoHint: 'JPG, PNG, WebP, HEIC · max 10 MB',
      video: 'Link al video (facoltativo)', privacy: 'Usiamo i tuoi dati e l’eventuale allegato per rispondere al tuo messaggio.',
      send: 'Invia messaggio', sending: 'Invio in corso…', success: 'Messaggio inviato. Grazie per averci contattato.',
      invalidEmail: 'Inserisci un indirizzo email valido.', invalidSubject: 'Inserisci un oggetto di massimo 120 caratteri.',
      invalidMessage: 'Inserisci una descrizione di massimo 5.000 caratteri.', invalidVideo: 'Inserisci un link al video valido, con HTTPS o HTTP.',
      photoSize: 'Scegli una foto di massimo 10 MB.', photoType: 'Scegli una foto valida in formato JPG, PNG, WebP o HEIC.',
      failed: 'Impossibile inviare il messaggio. Riprova più tardi.'
    },
    es: {
      title: 'Contáctanos', close: 'Cerrar', language: 'Idioma', requiredNote: 'Los campos marcados con * son obligatorios.',
      email: 'Tu correo electrónico *', subject: 'Asunto *', message: 'Descripción *', photo: 'Foto (opcional)',
      choosePhoto: 'Elige una foto', remove: 'Quitar foto', photoHint: 'JPG, PNG, WebP, HEIC · máx. 10 MB',
      video: 'Enlace al vídeo (opcional)', privacy: 'Usamos tus datos y el archivo adjunto para responder a tu mensaje.',
      send: 'Enviar mensaje', sending: 'Enviando…', success: 'Mensaje enviado. Gracias por ponerte en contacto.',
      invalidEmail: 'Introduce un correo electrónico válido.', invalidSubject: 'Introduce un asunto de hasta 120 caracteres.',
      invalidMessage: 'Introduce una descripción de hasta 5000 caracteres.', invalidVideo: 'Introduce un enlace al vídeo válido con HTTPS o HTTP.',
      photoSize: 'Elige una foto de hasta 10 MB.', photoType: 'Elige una foto válida en formato JPG, PNG, WebP o HEIC.',
      failed: 'No se pudo enviar el mensaje. Inténtalo más tarde.'
    },
    fr: {
      title: 'Contactez-nous', close: 'Fermer', language: 'Langue', requiredNote: 'Les champs marqués d’un * sont obligatoires.',
      email: 'Votre adresse e-mail *', subject: 'Objet *', message: 'Description *', photo: 'Photo (facultative)',
      choosePhoto: 'Choisir une photo', remove: 'Retirer la photo', photoHint: 'JPG, PNG, WebP, HEIC · 10 Mo max.',
      video: 'Lien vidéo (facultatif)', privacy: 'Nous utilisons vos coordonnées et la pièce jointe éventuelle pour vous répondre.',
      send: 'Envoyer le message', sending: 'Envoi en cours…', success: 'Message envoyé. Merci de nous avoir contactés.',
      invalidEmail: 'Saisissez une adresse e-mail valide.', invalidSubject: 'Saisissez un objet de 120 caractères maximum.',
      invalidMessage: 'Saisissez une description de 5 000 caractères maximum.', invalidVideo: 'Saisissez un lien vidéo HTTPS ou HTTP valide.',
      photoSize: 'Choisissez une photo de 10 Mo maximum.', photoType: 'Choisissez une photo valide au format JPG, PNG, WebP ou HEIC.',
      failed: 'Impossible d’envoyer votre message. Réessayez plus tard.'
    },
    de: {
      title: 'Kontakt', close: 'Schließen', language: 'Sprache', requiredNote: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
      email: 'Ihre E-Mail-Adresse *', subject: 'Betreff *', message: 'Beschreibung *', photo: 'Foto (optional)',
      choosePhoto: 'Foto auswählen', remove: 'Foto entfernen', photoHint: 'JPG, PNG, WebP, HEIC · max. 10 MB',
      video: 'Videolink (optional)', privacy: 'Wir verwenden Ihre Angaben und einen etwaigen Anhang, um Ihnen zu antworten.',
      send: 'Nachricht senden', sending: 'Wird gesendet…', success: 'Nachricht gesendet. Vielen Dank für Ihre Anfrage.',
      invalidEmail: 'Geben Sie eine gültige E-Mail-Adresse ein.', invalidSubject: 'Geben Sie einen Betreff mit höchstens 120 Zeichen ein.',
      invalidMessage: 'Geben Sie eine Beschreibung mit höchstens 5.000 Zeichen ein.', invalidVideo: 'Geben Sie einen gültigen HTTPS- oder HTTP-Videolink ein.',
      photoSize: 'Wählen Sie ein Foto mit höchstens 10 MB.', photoType: 'Wählen Sie ein gültiges JPG-, PNG-, WebP- oder HEIC-Foto.',
      failed: 'Ihre Nachricht konnte nicht gesendet werden. Versuchen Sie es später erneut.'
    }
  };

  const dialog = document.getElementById('contactDialog');
  const openButton = document.getElementById('contactOpen');
  const languageSelect = document.getElementById('contactLanguage');
  const form = document.getElementById('contactForm');
  const submit = document.getElementById('contactSubmit');
  const status = document.getElementById('contactStatus');
  const photo = document.getElementById('contactPhoto');
  const photoName = document.getElementById('contactPhotoName');
  const remove = document.getElementById('contactRemove');
  const maxPhotoBytes = 10_000_000;
  const photoFormats = { jpg: 'jpg', jpeg: 'jpg', png: 'png', webp: 'webp', heic: 'heic', heif: 'heic' };
  const formFields = {
    invalidEmail: form.elements.email,
    invalidSubject: form.elements.subject,
    invalidMessage: form.elements.message,
    invalidVideo: form.elements.video,
    photoSize: photo,
    photoType: photo
  };
  let language;
  let statusKey = '';
  let statusKind = '';
  let sending = false;
  let submissionId;

  function setStatus(key = '', kind = '') {
    statusKey = key;
    statusKind = kind;
    status.textContent = key ? translations[language][key] : '';
    status.dataset.kind = kind;
  }

  function showError(key) {
    const field = formFields[key];
    if (field) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-errormessage', status.id);
      field.focus();
    }
    setStatus(key, 'error');
  }

  function updatePhoto() {
    const file = photo.files[0];
    photoName.textContent = file ? file.name : translations[language].choosePhoto;
    remove.hidden = !file;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    const copy = translations[language];
    dialog.lang = language;
    openButton.lang = language;
    languageSelect.value = language;
    document.querySelectorAll('[data-contact]').forEach((element) => {
      element.textContent = copy[element.dataset.contact];
    });
    document.querySelectorAll('[data-contact-label]').forEach((element) => {
      element.setAttribute('aria-label', copy[element.dataset.contactLabel]);
    });
    document.getElementById('contactPhotoHint').textContent = copy.photoHint;
    submit.textContent = sending ? copy.sending : copy.send;
    updatePhoto();
    setStatus(statusKey, statusKind);
  }

  function photoFormat(file) {
    const extension = /\.([a-z]+)$/i.exec(file.name)?.[1].toLowerCase();
    return Object.hasOwn(photoFormats, extension) ? photoFormats[extension] : '';
  }

  function validatePhoto(file) {
    if (!file) return '';
    if (file.size > maxPhotoBytes) return 'photoSize';
    if (!file.size || !photoFormat(file)) return 'photoType';
    return '';
  }

  function validateVideo(value) {
    if (!value) return true;
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password;
    } catch {
      return false;
    }
  }

  async function postContact(payload, step) {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, step }),
      signal: AbortSignal.timeout(45_000)
    });
    const data = await response.json().catch(() => ({}));
    return response.ok ? data : { code: data.code };
  }

  const preferred = (navigator.languages || [navigator.language])
    .map((locale) => locale.toLowerCase().split('-')[0])
    .find((locale) => Object.hasOwn(translations, locale));
  setLanguage(preferred || 'en');

  openButton.addEventListener('click', () => dialog.showModal());
  document.getElementById('contactClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));

  form.addEventListener('input', (event) => {
    submissionId = undefined;
    event.target.removeAttribute('aria-invalid');
    event.target.removeAttribute('aria-errormessage');
    if (!sending) setStatus();
  });
  photo.addEventListener('change', () => {
    updatePhoto();
    const error = validatePhoto(photo.files[0]);
    if (error) showError(error);
  });
  remove.addEventListener('click', () => {
    photo.value = '';
    photo.dispatchEvent(new Event('input', { bubbles: true }));
    updatePhoto();
    photo.focus();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;

    const data = new FormData(form);
    const email = data.get('email').trim();
    const subject = data.get('subject').trim();
    const message = data.get('message').trim();
    const video = data.get('video').trim();
    const file = photo.files[0];
    const error = !email || !form.elements.email.validity.valid ? 'invalidEmail'
      : !subject || subject.length > 120 ? 'invalidSubject'
      : !message || message.length > 5000 ? 'invalidMessage'
      : !validateVideo(video) || video.length > 2048 ? 'invalidVideo'
      : validatePhoto(file);
    if (error) {
      showError(error);
      return;
    }

    sending = true;
    const editable = [...form.elements].filter((element) => element !== submit);
    editable.forEach((element) => { element.disabled = true; });
    submit.disabled = true;
    submit.textContent = translations[language].sending;
    setStatus('sending');

    try {
      const payload = {
        id: submissionId ??= crypto.randomUUID(),
        email, subject, message, video,
        website: data.get('website'),
        photo: file ? photoFormat(file) : null
      };
      let result;
      if (file) {
        result = await postContact(payload, 'upload');
        if (result.uploadUrl) {
          const upload = await fetch(result.uploadUrl, {
            method: 'PUT',
            body: file,
            signal: AbortSignal.timeout(120_000)
          });
          result = upload.ok ? null : { code: upload.status === 413 ? 'photoSize' : 'uploadFailed' };
        }
      }
      result ??= await postContact(payload, 'send');
      if (result.ok !== true) {
        const errorKey = result.code;
        const fieldError = Object.hasOwn(formFields, errorKey) ? errorKey : 'failed';
        editable.forEach((element) => { element.disabled = false; });
        showError(fieldError);
        return;
      }

      form.reset();
      submissionId = undefined;
      Object.values(formFields).forEach((field) => {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-errormessage');
      });
      updatePhoto();
      setStatus('success', 'success');
    } catch {
      setStatus('failed', 'error');
    } finally {
      sending = false;
      editable.forEach((element) => { element.disabled = false; });
      submit.disabled = false;
      submit.textContent = translations[language].send;
    }
  });
})();
