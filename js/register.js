import User from './User.js';

const registerForm = document.getElementById('form-container');

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userRegister = document.getElementById('user-input').value;
  const passRegister = document.getElementById('password-input').value;
  const user = new User(userRegister, passRegister);
  user.register();
});
