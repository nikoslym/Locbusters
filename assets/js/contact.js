/**
 * THE LOCBUSTERS — Contact Form
 * Handles client-side validation and success state.
 * Replace the submit handler with your backend/Webflow/Formspree integration.
 */

'use strict';

(function () {

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

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
      setError(name, 'Please enter your name.');
      valid = false;
    } else {
      clearError(name);
    }

    if (!email.value.trim()) {
      setError(email, 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(email.value)) {
      setError(email, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(email);
    }

    if (!message.value.trim()) {
      setError(message, 'Please enter your message.');
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
    btn.textContent = 'Sending…';

    /*
    ┌─────────────────────────────────────────────────────────┐
    │  BACKEND INTEGRATION — REPLACE THIS BLOCK               │
    │                                                         │
    │  Option A — Formspree:                                  │
    │    fetch('https://formspree.io/f/YOUR_ID', {            │
    │      method: 'POST',                                    │
    │      body: new FormData(form),                          │
    │      headers: { Accept: 'application/json' }            │
    │    }).then(showSuccess).catch(showError)                 │
    │                                                         │
    │  Option B — Webflow Forms:                              │
    │    Remove this JS entirely. Add to <form>:              │
    │    data-name="Contact" data-wf-page-id="..."            │
    │    Webflow handles submission natively.                  │
    │                                                         │
    │  Option C — Custom backend:                             │
    │    POST to your API endpoint with FormData or JSON.     │
    └─────────────────────────────────────────────────────────┘
    */

    // Demo: simulate a short delay then show success
    setTimeout(function () {
      form.querySelectorAll('.cnt-field__input').forEach(el => el.value = '');
      btn.disabled = false;
      btn.innerHTML = 'Send Message <span class="cnt-submit__arrow" aria-hidden="true">→</span>';
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });

})();
