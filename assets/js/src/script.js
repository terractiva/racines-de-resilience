// =================================================================================================
// Couleur du menu
// =================================================================================================
const throttle = require('lodash.throttle');

if (!!document.querySelector('section.hero')) {
  const navbar = document.querySelector('nav.navbar');

  function updateNavbarClass() {
    if (window.scrollY > navbar.clientHeight) navbar.classList.add('is-white');
    else navbar.classList.remove('is-white');
  }

  updateNavbarClass();
  document.addEventListener('scroll', throttle(updateNavbarClass, 200), { passive: true });
}

// =================================================================================================
// Menu mobile
// =================================================================================================
const burgerButton = document.getElementById('navbar-burger-button');

burgerButton.addEventListener('click', () => {
  document.getElementById('navbar-menu').classList.toggle('is-active');
  burgerButton.classList.toggle('is-active');
});

// =================================================================================================
// Défilement horizontal
// =================================================================================================
const SCROLL_INTERVAL = 15;

const isMotionDisabled = window.matchMedia(`(prefers-reduced-motion: reduce)`)?.matches ?? true;

if (!isMotionDisabled) {
  document.querySelectorAll('.horizontal-slider.is-automatic').forEach((slider) => {
    if (slider.clientWidth < slider.scrollWidth) {
      let direction = 1;
      let intervalId = null;
      let isPaused = 1;

      startScroll();

      slider.addEventListener('touchstart', stopScroll);
      slider.addEventListener('touchend', startScroll);
      slider.addEventListener('mouseenter', stopScroll);
      slider.addEventListener('mouseleave', startScroll);
      slider.addEventListener('focus', stopScroll);
      slider.addEventListener('blur', startScroll);

      function startScroll() {
        isPaused--;

        if (isPaused === 0) {
          intervalId = setInterval(() => {
            if (slider.scrollLeft <= 0) direction = 1;
            else if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) direction = -1;

            slider.scrollBy({ left: direction });
          }, SCROLL_INTERVAL);
        }
      }

      function stopScroll() {
        isPaused++;
        clearInterval(intervalId);
      }
    }
  });
}
