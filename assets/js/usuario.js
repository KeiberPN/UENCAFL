

/* script login institucional  */
/* const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
 */
  /* const username = document.querySelector('input[type="text"]');
  const password = document.querySelector('input[type="password"]'); */

  // Verifica si alguno de los campos está vacío
  /* if (username.value === '' || password.value === '') {
    alert('Llene todos los campos.');
    return;
  } */

  /* Si el nombre de usuario o la contraseña son incorrectos, limpia el formulario */
  /* if (username.value !== 'Directora' || password.value !== 'menca') {
    form.reset();
  } */

 /* Si el nombre de usuario y la contraseña son correctos, redirige al usuario a una página diferente */
  /* if (username.value === 'Directora' && password.value === 'menca') {
    window.location.href = 'actds.html';
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
}); */








/* definir contraseñas de años */
// Objeto con los usuarios y contraseñas válidos por año
const validCredentials = {
  '1año': {
    username: 'usuar1',
    password: 'contr1'
  },
  '2año': {
    username: 'usuar2',
    password: 'contr2'
  },
  '3año': {
    username: 'usuar3',
    password: 'contr3'
  },
  '4año': {
    username: 'usuar4',
    password: 'contr4'
  },
  '5año': {
    username: 'usuar5',
    password: 'contr5'
  }
};

// Recuperar el formulario
const loginForm = document.getElementById('login-form');

// Agregar el event listener al envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Obtener los datos del formulario
const username = document.querySelector('#login-form input[name="username"]').value;
const password = document.querySelector('#login-form input[name="password"]').value;
const year = document.querySelector('#login-form select[name="year"]').value;

    // Verificar si los datos ingresados son válidos
    if (validCredentials[year] && validCredentials[year].username === username && validCredentials[year].password === password) {
        // Redirigir al usuario a la página apropiada para el año seleccionado
        window.location.href = `actds_${year}.html`;
    } else {
        // Limpiar los campos del formulario
        document.querySelector('#login-form input[name="username"]').value = '';
        document.querySelector('#login-form input[name="password"]').value = '';
        document.querySelector('#login-form select[name="year"]').value = '';

        // Mostrar un mensaje de alerta
        alert('Usuario o contraseña incorrectos');
    }
});











/* ========================== */