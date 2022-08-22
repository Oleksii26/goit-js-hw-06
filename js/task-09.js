function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const outputEl = document.querySelector('.color');

function changeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  outputEl.textContent = randomColor;
}

btnEl.addEventListener('click', changeColor);