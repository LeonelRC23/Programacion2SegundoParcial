const user = {
  username: 'leonel',
  password: 'admin',
};

function Login() {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userLogin = document.getElementById('user-input').value;
    const passLogin = document.getElementById('password-input').value;

    if (user.username == userLogin && user.password == passLogin) {
      alertLogin();
    } else {
      alert('Datos incorrectos');
    }
  });
}

function alertLogin() {
  alert('Incio de sesion correcto');
}
