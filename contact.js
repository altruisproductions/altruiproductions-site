(() => {
  const translations = {
    en: {
      title: 'Contact us', close: 'Close', selectLanguage: 'Select language', requiredNote: 'Fields marked * are required.',
      email: 'Your email *', subject: 'Subject *', message: 'Description *', photo: 'Photos (optional)',
      choosePhoto: 'Choose photos', remove: 'Remove photos', photoHint: 'JPG, PNG, WebP, HEIC · 10 MB total max.',
      video: 'Video link (optional)', privacy: 'We use your details and any attachment to respond to your message.',
      send: 'Send message', sending: 'Sending…', success: 'Message sent. Thank you for getting in touch.',
      invalidEmail: 'Enter a valid email address.', invalidSubject: 'Enter a subject of up to 120 characters.',
      invalidMessage: 'Enter a description of up to 5,000 characters.', invalidVideo: 'Enter a valid HTTPS or HTTP video link.',
      photoSize: 'Choose photos totaling 10 MB or less.', photoType: 'Choose valid JPG, PNG, WebP or HEIC photos.',
      failed: 'Your message couldn’t be sent. Please try again later.'
    },
    it: {
      title: 'Contattaci', close: 'Chiudi', selectLanguage: 'Seleziona lingua', requiredNote: 'I campi contrassegnati con * sono obbligatori.',
      email: 'La tua email *', subject: 'Oggetto *', message: 'Descrizione *', photo: 'Foto (facoltative)',
      choosePhoto: 'Scegli le foto', remove: 'Rimuovi le foto', photoHint: 'JPG, PNG, WebP, HEIC · max 10 MB totali',
      video: 'Link al video (facoltativo)', privacy: 'Usiamo i tuoi dati e l’eventuale allegato per rispondere al tuo messaggio.',
      send: 'Invia messaggio', sending: 'Invio in corso…', success: 'Messaggio inviato. Grazie per averci contattato.',
      invalidEmail: 'Inserisci un indirizzo email valido.', invalidSubject: 'Inserisci un oggetto di massimo 120 caratteri.',
      invalidMessage: 'Inserisci una descrizione di massimo 5.000 caratteri.', invalidVideo: 'Inserisci un link al video valido, con HTTPS o HTTP.',
      photoSize: 'Il totale delle foto deve essere al massimo di 10 MB.', photoType: 'Scegli foto in formato JPG, PNG, WebP o HEIC.',
      failed: 'Impossibile inviare il messaggio. Riprova più tardi.'
    },
    es: {
      title: 'Contáctanos', close: 'Cerrar', selectLanguage: 'Elegir idioma', requiredNote: 'Los campos marcados con * son obligatorios.',
      email: 'Tu correo electrónico *', subject: 'Asunto *', message: 'Descripción *', photo: 'Fotos (opcional)',
      choosePhoto: 'Elige las fotos', remove: 'Quitar fotos', photoHint: 'JPG, PNG, WebP, HEIC · máx. 10 MB en total',
      video: 'Enlace al vídeo (opcional)', privacy: 'Usamos tus datos y el archivo adjunto para responder a tu mensaje.',
      send: 'Enviar mensaje', sending: 'Enviando…', success: 'Mensaje enviado. Gracias por ponerte en contacto.',
      invalidEmail: 'Introduce un correo electrónico válido.', invalidSubject: 'Introduce un asunto de hasta 120 caracteres.',
      invalidMessage: 'Introduce una descripción de hasta 5000 caracteres.', invalidVideo: 'Introduce un enlace al vídeo válido con HTTPS o HTTP.',
      photoSize: 'El total de las fotos no puede superar los 10 MB.', photoType: 'Elige fotos en formato JPG, PNG, WebP o HEIC.',
      failed: 'No se pudo enviar el mensaje. Inténtalo más tarde.'
    },
    fr: {
      title: 'Contactez-nous', close: 'Fermer', selectLanguage: 'Choisir la langue', requiredNote: 'Les champs marqués d’un * sont obligatoires.',
      email: 'Votre adresse e-mail *', subject: 'Objet *', message: 'Description *', photo: 'Photos (facultatif)',
      choosePhoto: 'Choisir des photos', remove: 'Retirer les photos', photoHint: 'JPG, PNG, WebP, HEIC · 10 Mo au total',
      video: 'Lien vidéo (facultatif)', privacy: 'Nous utilisons vos coordonnées et la pièce jointe éventuelle pour vous répondre.',
      send: 'Envoyer le message', sending: 'Envoi en cours…', success: 'Message envoyé. Merci de nous avoir contactés.',
      invalidEmail: 'Saisissez une adresse e-mail valide.', invalidSubject: 'Saisissez un objet de 120 caractères maximum.',
      invalidMessage: 'Saisissez une description de 5 000 caractères maximum.', invalidVideo: 'Saisissez un lien vidéo HTTPS ou HTTP valide.',
      photoSize: 'Le total des photos ne doit pas dépasser 10 Mo.', photoType: 'Choisissez des photos au format JPG, PNG, WebP ou HEIC.',
      failed: 'Impossible d’envoyer votre message. Réessayez plus tard.'
    },
    de: {
      title: 'Kontakt', close: 'Schließen', selectLanguage: 'Sprache auswählen', requiredNote: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
      email: 'Ihre E-Mail-Adresse *', subject: 'Betreff *', message: 'Beschreibung *', photo: 'Fotos (optional)',
      choosePhoto: 'Fotos auswählen', remove: 'Fotos entfernen', photoHint: 'JPG, PNG, WebP, HEIC · max. 10 MB insgesamt',
      video: 'Videolink (optional)', privacy: 'Wir verwenden Ihre Angaben und einen etwaigen Anhang, um Ihnen zu antworten.',
      send: 'Nachricht senden', sending: 'Wird gesendet…', success: 'Nachricht gesendet. Vielen Dank für Ihre Anfrage.',
      invalidEmail: 'Geben Sie eine gültige E-Mail-Adresse ein.', invalidSubject: 'Geben Sie einen Betreff mit höchstens 120 Zeichen ein.',
      invalidMessage: 'Geben Sie eine Beschreibung mit höchstens 5.000 Zeichen ein.', invalidVideo: 'Geben Sie einen gültigen HTTPS- oder HTTP-Videolink ein.',
      photoSize: 'Die Fotos dürfen zusammen höchstens 10 MB groß sein.', photoType: 'Wählen Sie gültige JPG-, PNG-, WebP- oder HEIC-Fotos.',
      failed: 'Ihre Nachricht konnte nicht gesendet werden. Versuchen Sie es später erneut.'
    }
  };

  const homeTranslations = {
    en: {
      kicker: 'Independent apps, films and games',
      intro: 'Independent digital experiences by Giovanni Altrui, spanning narrative games, productivity apps, interactive cinema, manga projects and filmmaking work.',
      projects: 'Projects', survival: 'Narrative survival', desktop: 'Real Desktop Experience',
      film: 'Interactive film', manga: 'Coming soon', filmmaker: 'Showreel & courses'
    },
    it: {
      kicker: 'App, film e giochi indipendenti',
      intro: 'Esperienze digitali indipendenti di Giovanni Altrui, tra giochi narrativi, app di produttività, cinema interattivo, progetti manga e produzioni video.',
      projects: 'Progetti', survival: 'Survival narrativo', desktop: 'Una vera esperienza desktop',
      film: 'Film interattivo', manga: 'In arrivo', filmmaker: 'Showreel e corsi'
    },
    es: {
      kicker: 'Aplicaciones, cine y juegos independientes',
      intro: 'Experiencias digitales independientes de Giovanni Altrui, desde juegos narrativos y aplicaciones de productividad hasta cine interactivo, proyectos de manga y producciones audiovisuales.',
      projects: 'Proyectos', survival: 'Supervivencia narrativa', desktop: 'Una auténtica experiencia de escritorio',
      film: 'Película interactiva', manga: 'Próximamente', filmmaker: 'Videorreel y cursos'
    },
    fr: {
      kicker: 'Applications, films et jeux indépendants',
      intro: 'Des expériences numériques indépendantes signées Giovanni Altrui, entre jeux narratifs, applications de productivité, cinéma interactif, projets de mangas et réalisations audiovisuelles.',
      projects: 'Projets', survival: 'Survie narrative', desktop: 'Une véritable expérience de bureau',
      film: 'Film interactif', manga: 'Bientôt disponible', filmmaker: 'Bande démo et cours'
    },
    de: {
      kicker: 'Unabhängige Apps, Filme und Spiele',
      intro: 'Unabhängige digitale Projekte von Giovanni Altrui, von erzählerischen Spielen und Produktivitäts-Apps bis hin zu interaktivem Kino, Manga und Filmproduktionen.',
      projects: 'Projekte', survival: 'Storybasiertes Survival', desktop: 'Ein echtes Desktop-Erlebnis',
      film: 'Interaktiver Film', manga: 'Demnächst', filmmaker: 'Showreel und Kurse'
    }
  };

  const dialog = document.getElementById('contactDialog');
  const openButton = document.getElementById('contactOpen');
  const languageMenu = document.getElementById('homeLanguage');
  const languageTrigger = document.getElementById('homeLanguageTrigger');
  const languageOptions = document.getElementById('homeLanguageOptions');
  const languageButtons = [...languageOptions.querySelectorAll('[data-lang]')];
  const homeText = [...document.querySelectorAll('[data-home]')];
  const homeLabels = [...document.querySelectorAll('[data-home-label]')];
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
    const names = Array.from(photo.files, (file) => file.name).join(', ');
    photoName.textContent = names || translations[language].choosePhoto;
    photoName.title = names;
    remove.hidden = !names;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    const copy = translations[language];
    document.documentElement.lang = language;
    languageTrigger.textContent = language.toUpperCase();
    languageTrigger.setAttribute('aria-label', `${copy.selectLanguage} (${language.toUpperCase()})`);
    languageButtons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const home = homeTranslations[language];
    homeText.forEach((element) => { element.textContent = home[element.dataset.home]; });
    homeLabels.forEach((element) => { element.setAttribute('aria-label', home[element.dataset.homeLabel]); });
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

  function validatePhotos(files) {
    if (files.reduce((total, file) => total + file.size, 0) > maxPhotoBytes) return 'photoSize';
    if (files.some((file) => file.size < 12 || !photoFormat(file))) return 'photoType';
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

  const languagePreferenceKey = 'altrui-home-language';
  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem(languagePreferenceKey);
  } catch {
    // Storage can be unavailable, for example when cookies and site data are blocked.
  }
  setLanguage(Object.hasOwn(translations, savedLanguage) ? savedLanguage : 'en');

  openButton.addEventListener('click', () => dialog.showModal());
  document.getElementById('contactClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  function showLanguages(open) {
    languageMenu.classList.toggle('open', open);
    languageTrigger.setAttribute('aria-expanded', String(open));
    languageOptions.hidden = !open;
  }

  languageTrigger.addEventListener('click', (event) => {
    const opening = languageOptions.hidden;
    showLanguages(opening);
    if (opening && event.detail === 0) languageOptions.querySelector('.active').focus();
  });
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
      try {
        localStorage.setItem(languagePreferenceKey, language);
      } catch {
        // The current page still uses the selected language without storage.
      }
      showLanguages(false);
      languageTrigger.focus();
    });
  });
  document.addEventListener('click', (event) => {
    if (!languageMenu.contains(event.target)) showLanguages(false);
  });
  languageMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !languageOptions.hidden) {
      showLanguages(false);
      languageTrigger.focus();
    }
  });

  form.addEventListener('input', (event) => {
    submissionId = undefined;
    event.target.removeAttribute('aria-invalid');
    event.target.removeAttribute('aria-errormessage');
    if (!sending) setStatus();
  });
  photo.addEventListener('change', () => {
    updatePhoto();
    const error = validatePhotos([...photo.files]);
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
    const files = [...photo.files];
    const error = !email || !form.elements.email.validity.valid ? 'invalidEmail'
      : !subject || subject.length > 120 ? 'invalidSubject'
      : !message || message.length > 5000 ? 'invalidMessage'
      : !validateVideo(video) || video.length > 2048 ? 'invalidVideo'
      : validatePhotos(files);
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
        photos: files.map((file) => ({ format: photoFormat(file), size: file.size }))
      };
      let result;
      if (files.length) {
        result = await postContact(payload, 'upload');
        if (result.uploadUrl) {
          const upload = await fetch(result.uploadUrl, {
            method: 'PUT',
            body: new Blob(files, { type: 'application/octet-stream' }),
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
