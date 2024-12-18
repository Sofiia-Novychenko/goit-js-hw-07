const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const greetingText = document.querySelector('h1');
greetingText.classList.add('hello-text');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
