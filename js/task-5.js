const button = document.querySelector('.change-color');
const output = document.querySelector('.color');

button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '148px';
button.style.height = '40px';
button.style.backgroundColor = '#4e75ff';
button.style.color = '#fff';

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

// function handleClick(event) {
//   const body = document.querySelector('body');
//   body.style.backgroundColor = getRandomHexColor();
//   output.textContent = body.style.backgroundColor;
// }
