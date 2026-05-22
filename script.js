function enviarMensaje() {
    // 1. Agarrar el texto que escribiste en el cuadro
    let input = document.querySelector('.input-zona input');
    let texto = input.value;

    // Si el usuario no escribió nada, no hacemos nada
    if (texto.trim() === "") return;

    // 2. Seleccionar la zona donde van los mensajes
    let zonaMensajes = document.querySelector('.mensajes-zona');

    // 3. Crear la nueva burbuja verde
    let nuevaBurbuja = document.createElement('div');
    nuevaBurbuja.classList.add('burbuja', 'enviado');
    nuevaBurbuja.innerText = texto;

    // 4. Meter la burbuja en el chat
    zonaMensajes.appendChild(nuevaBurbuja);

    // 5. Borrar el texto del cuadro para poder escribir otro
    input.value = "";

    // 6. Bajar el scroll automáticamente para ver el último mensaje
    zonaMensajes.scrollTop = zonaMensajes.scrollHeight;
}

// Hacer que también funcione al presionar la tecla Enter
document.querySelector('.input-zona input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});
// 1. Buscamos el botón de enviar y el cuadro de texto en la página
const botonEnviar = document.querySelector('.input-zona button');
const inputTexto = document.querySelector('.input-zona input');
const zonaMensajes = document.querySelector('.mensajes-zona');

// 2. Función que se encarga de crear y colgar el mensaje en el chat
function agregarMensaje() {
    const texto = inputTexto.value.trim(); // Agarramos lo que escribiste sin espacios locos

    // Si el cuadro está vacío, no hacemos nada
    if (texto === "") return;

    // Creamos la burbuja desde cero
    const nuevaBurbuja = document.createElement('div');
    nuevaBurbuja.classList.add('burbuja', 'enviado'); // Le ponemos el diseño verde de la derecha
    nuevaBurbuja.innerText = texto; // Le metemos tu texto dentro

    // Metemos la burbuja adentro de la zona de mensajes
    zonaMensajes.appendChild(nuevaBurbuja);

    // Limpiamos el input para que quede vacío otra vez
    inputTexto.value = "";

    // Hacemos que el chat baje solo si hay muchos mensajes (scroll)
    zonaMensajes.scrollTop = zonaMensajes.scrollHeight;
}

// 3. Escuchamos cuando haces CLIC en el botón verde "Enviar"
botonEnviar.addEventListener('click', agregarMensaje);

// 4. Escuchamos cuando presionas la tecla ENTER dentro del cuadro de texto
inputTexto.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarMensaje();
    }
});