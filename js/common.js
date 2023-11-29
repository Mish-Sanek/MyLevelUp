// basic header
const pageHeader = document.querySelector('.page-header');
const languagesBlocks = pageHeader.querySelectorAll('.page-header__languages');
const headerButton = pageHeader.querySelector('.page-header__menu-btn');
const headerNav = pageHeader.querySelector('.page-header__nav');

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('active');
  headerNav.classList.toggle('opened');

  if (headerButton.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

languagesBlocks.forEach((block) => {
  const btn = block.querySelector('.page-header__languages-set');
  const languagesListItem = block.querySelectorAll('.page-header__languages-list-item');

  btn.addEventListener('click', () => btn.classList.toggle('active'));
  languagesListItem.forEach((item) => {
    item.addEventListener('click', () => {
      btn.classList.remove('active')

      if (headerNav.classList.contains('opened')) {
        console.log(true);
        headerButton.classList.remove('active');
        headerNav.classList.remove('opened')
      } else {
        console.log(false);
      }
    });
  })
})

// sign in form

const loginButton = pageHeader.querySelector('.page-header__login');
const registerButton = pageHeader.querySelector('.page-header__register');
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
