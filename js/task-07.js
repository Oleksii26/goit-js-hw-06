const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const inputChange = (event) => {
  const inputCurrentValue = event.currentTarget.value;

  textEl.style.fontSize = `${inputCurrentValue}px`;
}

inputEl.addEventListener('input', inputChange);