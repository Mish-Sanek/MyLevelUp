// sign in form

const signInButton = document.querySelector('.page-header__sign-in');
const authWindow = document.querySelector('.auth-window');
const authWindowCloseBtn = authWindow.querySelector('.auth-window__close');
const authForm = authWindow.querySelectorAll('.auth-window__form');
const authWindowTextareas = authWindow.querySelectorAll('.auth-window__form textarea');

authWindowTextareas.forEach(element => {
  element.addEventListener('keyup', () => {
    element.style.height = "0";
    element.style.height = (25 + element.scrollHeight) + "px";
    console.log(element.value.length);

    if (element.value.length === 0) {
      console.log('0');
      element.style.height = "30px";
    }
  });
});


authForm.forEach(element => {
  element.addEventListener('focus', (e) => {
    e.preventDefault();
  })
});


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
