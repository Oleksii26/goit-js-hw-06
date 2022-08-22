const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

const plusBtnClick = () => {
  counterValue -= 1;
  valueRef.textContent = `${counterValue}`;
};

const minusBtnClick = () => {
  counterValue += 1;
  valueRef.textContent = `${counterValue}`;
};

decrementRef.addEventListener('click', plusBtnClick);
incrementRef.addEventListener('click', minusBtnClick);