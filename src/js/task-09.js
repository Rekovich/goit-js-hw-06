function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBodyColor)

function onBodyColor () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor()
}