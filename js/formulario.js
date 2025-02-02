"use strict";

const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const password = document.getElementById('password').value;

    if (password === '130226') {
        messageDiv.innerHTML = '<div class="alert alert-success" role="alert">Inicio de sesión exitoso</div>';
        setTimeout(() => {
            window.location.href = "html/starry_night.html"; 
        }, 2000);
    } else {
        messageDiv.innerHTML = '<div class="alert alert-danger" role="alert">Contraseña incorrecta. Intente nuevamente.</div>';
    }
});