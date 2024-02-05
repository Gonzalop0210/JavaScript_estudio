const input_nombre = document.querySelector('.input__nombre')
const input_apellido = document.querySelector('.input__apellido')
const input_correo = document.querySelector('.input__correo')
const boton = document.querySelector('.input__boton')
const span_nombre = document.querySelector('.nombre')
const span_apellido = document.querySelector('.apellido')
const span_correo = document.querySelector('.correo')

boton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input_nombre.value === '' || input_apellido.value === '' || input_correo.value === '') {
        alert('Llena todos los campos')
        input_nombre.value = '';
        input_apellido.value = '';
        input_correo.value = '';
        input_nombre.focus();
    } else {
        span_nombre.textContent = input_nombre.value;
        span_apellido.textContent = input_apellido.value;
        span_correo.textContent = input_correo.value;
    }
})