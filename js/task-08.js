const formEl = document.querySelector('.login-form');

const formSubmit = event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('You must fill in all fields!');
  } else {
    const userObj = {
      email: email.value,
      password: password.value,
    };

    event.currentTarget.reset();

    console.log(userObj);
  }
}

formEl.addEventListener('submit', formSubmit);
