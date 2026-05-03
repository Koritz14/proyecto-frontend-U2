console.log("JS funcionando");

const servicios = [
    {
        nombre: "Caminata al Monte Tarn",
        precio: 30000,
        descripcion: "Explora paisajes únicos en una caminata guiada.",
        imagen: "img/tarn.jpg"
    },
    {
        nombre: "Caminata a Parrillar",
        precio: 25000,
        descripcion: "Recorrido por bosques y naturaleza.",
        imagen: "img/parrillar.jpg"
    },
    {
        nombre: "Mirador Zapador Austral",
        precio: 20000,
        descripcion: "Vista panorámica increíble del sur.",
        imagen: "img/zapador.jpg"
    }
];

function mostrarServicios() {
    const contenedor = document.getElementById("contenedor-servicios");

    contenedor.innerHTML = "";

        servicios.forEach(servicio => {

            const card = document.createElement("div"); 
            card.classList.add("polaroid"); 

            const titulo = document.createElement("h3"); 
            titulo.textContent = servicio.nombre;

            const imagen = document.createElement("img"); 
            imagen.src = servicio.imagen;
            imagen.classList.add("img-servicio");

            const descripcion = document.createElement("p"); 
            descripcion.textContent = servicio.descripcion;

            const precio = document.createElement("p"); 
            precio.innerHTML = `<strong>Precio: $${servicio.precio}</strong>`;

            // Agregar elementos a la tarjeta
            card.appendChild(titulo); 
            card.appendChild(imagen);
            card.appendChild(descripcion);
            card.appendChild(precio);

            // Agregar tarjeta al contenedor
            contenedor.appendChild(card); 

        });
    }

mostrarServicios();

function validarFormulario() {

    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const email = document.getElementById("email").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    const mensaje = document.getElementById("mensaje");

    mensaje.classList.remove("error", "exito");

    // VALIDACIÓN 1: campos vacíos
    if (!nombre || !celular || !email || !pais || !ciudad || !consulta) {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.classList.add("error"); 
        return;
    }

    // VALIDACIÓN 2: email válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!regexEmail.test(email)) { 
        mensaje.textContent = "El email no es válido";
        mensaje.classList.add("error"); 
        return;
    }

    // VALIDACIÓN 3: celular numérico
    if (isNaN(celular) || celular.length < 8 || celular.length > 9) {
    mensaje.textContent = "El celular debe tener entre 8 y 9 números";
    mensaje.classList.add("error");
    return;
}

    // VALIDACIÓN 4: largo mínimo de consulta
    if (consulta.length < 5) {
        mensaje.textContent = "La consulta debe tener al menos 5 caracteres";
        mensaje.classList.add("error"); 
        return;
    }

    // SI TODO ESTÁ BIEN
    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.classList.add("exito");

    // ARMAR EL CONTENIDO DEL CORREO
    const asunto = "Consulta Turismo Extremo Sur";
    const cuerpo = `
    Nombre: ${nombre}
    Celular: ${celular}
    Email: ${email}
    País: ${pais}
    Ciudad: ${ciudad}

    Consulta:
    ${consulta}
    `;

    // ABRIR CLIENTE DE CORREO
    window.open(`mailto:mauro.gonzalez12@inacapmail.cl?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`);

    // LIMPIAR FORMULARIO
    limpiarFormulario(); 
    }

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); 

    validarFormulario();
});

function limpiarFormulario() {
    document.getElementById("formulario").reset(); 
}