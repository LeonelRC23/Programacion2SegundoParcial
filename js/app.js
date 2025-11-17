const key = 'userSession';
const loginForm = document.getElementById('form-container');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userLogin = document.getElementById('user-input').value;
  const passLogin = document.getElementById('password-input').value;
  let userFound = false;

  const usersLocalStorage = localStorage.getItem(key);
  const users = JSON.parse(usersLocalStorage);

  for (let i = 0; i < users?.length; i++) {
    if (users[i].username == userLogin && users[i].password == passLogin) {
      userFound = true;
      break;
    }
  }

  if (userFound) {
    window.location.replace('/views/home.html');
  } else {
    alert(
      'El usuario ingresado no se encuentra registrado o la contraseña es incorrecta.'
    );
  }
});
