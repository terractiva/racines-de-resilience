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
