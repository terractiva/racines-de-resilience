const burgerButton = document.getElementById('navbar-burger-button');

burgerButton.addEventListener('click', () => {
  document.getElementById('navbar-menu').classList.toggle('is-active');
  burgerButton.classList.toggle('is-active');
});
