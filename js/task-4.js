const form = document.querySelector('.login-form');
const button = document.querySelector('button');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '20px';

button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '86px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.color = '#fff';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (info.email === '' || info.password === '') {
    alert('All form fields must be filled in');
  }
  console.log(info);
  event.currentTarget.reset();
}
