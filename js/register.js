import User from './User.js';

const key = 'userSession';
const registerForm = document.getElementById('form-container');

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const userRegister = document.getElementById('user-input').value;
  const passRegister = document.getElementById('password-input').value;
  let userExist = false;
  const usersLocalStorage = localStorage.getItem(key);

  if (!usersLocalStorage) {
    const users = [];
    const user = new User(userRegister, passRegister);
    users.push(user);

    const usersToSave = JSON.stringify(users);
    localStorage.setItem(key, usersToSave);

    alert('Usuario registrado con exito.');
  } else {
    const users = JSON.parse(usersLocalStorage);

    for (let i = 0; i < users.length; i++) {
      if (users[i].username == userRegister) {
        userExist = true;
        break;
      }
    }

    if (userExist) {
      alert('El usuario ya existe.');
    } else {
      const user = new User(userRegister, passRegister);
      users.push(user);
      const usersToSave = JSON.stringify(users);
      localStorage.setItem(key, usersToSave);
      alert('Usuario registrado con exito.');
    }
  }
});
