const body = document.querySelector('.page__body');
const themeButtons = document.querySelectorAll('.theme__button');
const logo = document.querySelector('.logo__image');

const lightLogo = logo.src;
const darkLogo = './src/img/logo-theme.svg';

const applyTheme = (themeValue) => {
  body.dataset.theme = themeValue;

  if(themeValue === 'dark') {
    logo.src = darkLogo;
  } else {
    logo.src = lightLogo;
  }
};

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyTheme(btn.dataset.theme);
    localStorage.setItem('theme', btn.dataset.theme);
  });
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

export { savedTheme };