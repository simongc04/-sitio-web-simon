document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search');
    const cocktailList = document.getElementById('cocktail-list');
    let bebidas = [];

    function cargarJSON() {
        fetch("consu.json")
            .then(response => response.json())
            .then(data => {
                bebidas = data;
                mostrarBebidas(bebidas);
            })
            .catch(error => console.error('Error al cargar el archivo JSON', error));
    }

    function mostrarBebidas(bebidas) {
        cocktailList.innerHTML = bebidas.map(bebida => crearBebidaElement(bebida)).join('');
    }

    function crearBebidaElement(bebida) {
        return `
            <div class="consumicion">
                <img class="consumicion-imagen" src="${bebida.imagen_url}" alt="${bebida.nombre}">
                <div class="consumicion-contenido">
                    <h3>${bebida.nombre}</h3>
                    <p class="descripcion">${bebida.descripcion}</p>
                    <p class="precio">Precio: ${bebida.precio}</p>
                    <p class="receta">Receta: ${bebida.receta}</p>
                </div>
            </div>`;
    }

    searchInput.addEventListener('keyup', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredBebidas = bebidas.filter(bebida => bebida.nombre.toLowerCase().includes(searchTerm));
        mostrarBebidas(filteredBebidas);
    });

    cargarJSON();
});
