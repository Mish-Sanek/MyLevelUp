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
