const faqButton = document.querySelectorAll('.faq__list-question');

faqButton.forEach(button => {
  button.addEventListener('click', () => button.classList.toggle('active'));
});
