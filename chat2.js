const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const contraseña = document.querySelector('#contraseña');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar que los campos no estén vacíos
  if (!nombre.value || !apellido.value || !correo.value || !contraseña.value) {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Crear objeto de usuario
  const usuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    contraseña: contraseña.value
  };

  // Guardar objeto de usuario en localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  // Redirigir a la página de inicio de sesión
  window.location.href = 'login.html';
});
