const form = document.querySelector('.login-form');
const buttonSubmit = document.querySelector('button');
buttonSubmit.classList.add('button-submit');

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
  } else {
    console.log(info);
  }

  event.currentTarget.reset();
}
