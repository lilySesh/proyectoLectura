const form = document.getElementById('form');
const usuario = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usuarioValue = usuario.value.trim();
    const passwordValue = password.value.trim();

    if (usuarioValue === '') {
        setErrorFor(usuario, 'No puede dejar el usuario en blanco');
    } else {
        setSuccessFor(usuario);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'No puede dejar la contraseña en blanco');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    formControl.className = 'form-control error';
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
