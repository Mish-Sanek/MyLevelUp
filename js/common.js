// sign in form

const signInButton = document.querySelector('.page-header__sign-in');
const authWindow = document.querySelector('.auth-window');
const authWindowCloseBtn = authWindow.querySelector('.auth-window__close')

signInButton.addEventListener('click', () => {
  authWindow.classList.add('active');
});

authWindowCloseBtn.addEventListener('click', () => {
  authWindow.classList.remove('active');
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
