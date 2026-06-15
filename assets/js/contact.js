/**
 * THE LOCBUSTERS Contact Form
 * Handles client-side validation and success state.
 * Replace the submit handler with your backend/Webflow/Formspree integration.
 */

'use strict';

(function () {

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  function t(key) {
    if (typeof window.getLocbustersTranslation === 'function') {
      return window.getLocbustersTranslation(key);
    }
    return '';
  }

  function resetSubmitButton(btn) {
    btn.disabled = false;
    btn.innerHTML = `<span data-i18n="contactPage.submit">${t('contactPage.submit') || 'Send Message'}</span><span class="cnt-submit__arrow" aria-hidden="true">→</span>`;
  }

  /* ----------------------------------------------------------
     VALIDATION HELPERS
     ---------------------------------------------------------- */
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function setError(input, msg) {
    input.setAttribute('aria-invalid', 'true');
    input.style.borderColor = '#c0392b';

    let err = input.parentElement.querySelector('.cnt-field__error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'cnt-field__error';
      err.setAttribute('role', 'alert');
      err.style.cssText = 'display:block;font-size:0.75rem;color:#c0392b;margin-top:4px;letter-spacing:0.04em;';
      input.parentElement.appendChild(err);
    }
    err.textContent = msg;
  }

  function clearError(input) {
    input.removeAttribute('aria-invalid');
    input.style.borderColor = '';
    const err = input.parentElement.querySelector('.cnt-field__error');
    if (err) err.remove();
  }

  function validateForm() {
    let valid = true;

    const name    = form.querySelector('#name');
    const email   = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name.value.trim()) {
      setError(name, t('contactPage.error.name') || 'Please enter your name.');
      valid = false;
    } else {
      clearError(name);
    }

    if (!email.value.trim()) {
      setError(email, t('contactPage.error.email') || 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(email.value)) {
      setError(email, t('contactPage.error.emailInvalid') || 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(email);
    }

    if (!message.value.trim()) {
      setError(message, t('contactPage.error.message') || 'Please enter your message.');
      valid = false;
    } else {
      clearError(message);
    }

    return valid;
  }

  /* ----------------------------------------------------------
     CLEAR ERRORS ON INPUT
     ---------------------------------------------------------- */
  form.querySelectorAll('.cnt-field__input').forEach(input => {
    input.addEventListener('input', () => clearError(input));
  });

  /* ----------------------------------------------------------
     SUBMIT HANDLER
     ---------------------------------------------------------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const btn = form.querySelector('.cnt-submit');
    btn.disabled = true;
    btn.innerHTML = `<span>${t('contactPage.sending') || 'Sending…'}</span>`;

    // Demo: simulate a short delay then show success
    setTimeout(function () {
      form.querySelectorAll('.cnt-field__input').forEach(el => el.value = '');
      resetSubmitButton(btn);
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });

})();
