function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const controlsInput = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.classList.add('create-btn');
destroyBtn.classList.add('destroy-btn');
controlsInput.classList.add('controls-input');

function createBoxes(amount) {
  let size = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesMarkup += `
      <div 
        style="width: ${size}px; height: ${size}px; background-color: ${color};">
      </div>
    `;
    size += 10;
  }

  boxesContainer.innerHTML = '';
  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(controlsInput.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    controlsInput.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
