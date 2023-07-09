const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
}