// script.js

const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar tu lógica de validación (por ejemplo, verificar si el correo electrónico es válido).

    // Si todo está bien, puedes enviar el formulario al servidor.
    console.log('Formulario enviado:', { username, email, password });
});