const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('input');

const loginLabel = document.querySelectorAll('label');
const loginBtn = document.querySelector('button');

loginInput.classList.add('login-input');
loginLabel.forEach(label => {
  label.classList.add('login-label');
});
loginBtn.classList.add('login-btn');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = loginForm.elements.email.value;
  const passwordValue = loginForm.elements.password.value;

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    [loginForm.elements.email.name]: emailValue,
    [loginForm.elements.password.name]: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
