document.addEventListener("DOMContentLoaded", (event) => {

const formulario = document.getElementById('formulario');
const botonEnviar = document.getElementById('enviar');

botonEnviar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaDeNacimiento = document.getElementById('nacimiento').value;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaDeNacimiento: fechaDeNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(datos => {
        console.log('Respuesta del servidor:', datos);
        alert('Datos enviados con éxito');
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos');
    });
});
});