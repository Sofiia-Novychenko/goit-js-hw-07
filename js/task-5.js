function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
// console.log(getRandomHexColor());

const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const colorSpanText = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpanText.textContent = randomColor;
});
