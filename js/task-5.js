const button = document.querySelector('.change-color');
const output = document.querySelector('.color');
button.classList.add('button-submit');

button.addEventListener('click', handleClick);

function handleClick(event) {
  const body = document.querySelector('body');
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  output.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
