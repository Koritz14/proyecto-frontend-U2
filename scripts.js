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
        contenedor.innerHTML += `
            <div class="servicio">
                <h3>${servicio.nombre}</h3>
                <img class="img-servicio" src="${servicio.imagen}" width="200">
                <p>${servicio.descripcion}</p>
                <p><strong>Precio: $${servicio.precio}</strong></p>
            </div>
        `;
    });
}

mostrarServicios();