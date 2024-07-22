function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = '';

    if (!validateEmail(email)) {
        errorMessage += '* Email incorrecto\n';
    }
    if (password.length < 7) {
        errorMessage += '* La contraseña debe tener al menos siete caracteres\n';
    }
    if (!validatePassword(password)) {
        errorMessage += '* La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y mínimo 7 caracteres\n';
    }
    if (password !== confirmPassword) {
        errorMessage += '* La contraseña no coincide\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert('Formulario enviado correctamente');
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
    return re.test(password);
}
