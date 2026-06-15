/**
 * Runs in <head> — restores html lang before first paint when GR is stored.
 */
(function () {
  try {
    if (localStorage.getItem('locbusters-lang') === 'gr') {
      document.documentElement.lang = 'el';
    }
  } catch (e) {
    /* localStorage unavailable */
  }
})();
