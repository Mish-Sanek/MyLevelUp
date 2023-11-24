// sign in form

const loginButton = document.querySelector('.page-header__login');
const registerButton = document.querySelector('.page-header__register');
const modalWindow = document.querySelector('.modal-window');
const loginWindow = modalWindow.querySelector('.modal-window__auth--login');
const closeLoginBtn = loginWindow.querySelector('.modal-window__close');
const registerWindow = modalWindow.querySelector('.modal-window__auth--register');
const closeRegisterBtn = registerWindow.querySelector('.modal-window__close');
const routeToRegisterBtn = registerWindow.querySelector('.modal-window__form-route--register');
const routeToLoginBtn = loginWindow.querySelector('.modal-window__form-route--login');

loginButton.addEventListener('click', () => {
  modalWindow.classList.add('active');
  loginWindow.classList.add('active');
});

registerButton.addEventListener('click', () => {
  modalWindow.classList.add('active');
  registerWindow.classList.add('active');
});

closeLoginBtn.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  loginWindow.classList.remove('active');
})

closeRegisterBtn.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  registerWindow.classList.remove('active');
})

routeToRegisterBtn.addEventListener('click', () => {
  loginWindow.classList.add('active');
  registerWindow.classList.remove('active');
});

routeToLoginBtn.addEventListener('click', () => {
  registerWindow.classList.add('active');
  loginWindow.classList.remove('active');
});




// mobile menu
const headerButton = document.querySelector('.page-header__menu-btn');
const headerNav = document.querySelector('.page-header__nav');

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('active');
  headerNav.classList.toggle('opened');

  if (headerButton.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
