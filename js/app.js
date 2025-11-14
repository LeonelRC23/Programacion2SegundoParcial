const user = {
  username: 'leonel',
  password: 'admin',
};
const loginForm = document.getElementById('form-container');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userLogin = document.getElementById('user-input').value;
  const passLogin = document.getElementById('password-input').value;
  if (user.username == userLogin && user.password == passLogin) {
    alert('Datos correctos');
    window.location.replace('/views/home.html');
  } else {
    alert('Datos incorrectos');
  }
});
