class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  register() {
    const key = 'userSession';
    let userExist = false;
    const usersLocalStorage = localStorage.getItem(key);

    if (!usersLocalStorage) {
      const users = [];
      const user = {
        username: this.username,
        password: this.password,
      };
      users.push(user);

      const usersToSave = JSON.stringify(users);
      localStorage.setItem(key, usersToSave);

      alert('Usuario registrado con exito.');
    } else {
      const users = JSON.parse(usersLocalStorage);

      for (let i = 0; i < users.length; i++) {
        if (users[i].username == this.username) {
          userExist = true;
          break;
        }
      }

      if (userExist) {
        alert('El usuario ya existe.');
      } else {
        const user = {
          username: this.username,
          password: this.password,
        };
        users.push(user);
        const usersToSave = JSON.stringify(users);
        localStorage.setItem(key, usersToSave);
        alert('Usuario registrado con exito.');
        window.location.replace('/index.html');
      }
    }
  }
}

export default User;
