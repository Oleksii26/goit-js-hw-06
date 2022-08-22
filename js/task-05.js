const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputChange = (event) => {
  const inputCurrentValue = event.currentTarget.value;

  outputRef.textContent = inputCurrentValue !== '' ? inputCurrentValue : 'Anonymous';
}

inputRef.addEventListener('input', inputChange);