document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('informacion.xml');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo XML');
        }
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const horario = xml.querySelector('horario').textContent;
        const correo = xml.querySelector('correo').textContent;
        const telefono = xml.querySelector('telefono').textContent;
        const direccion = xml.querySelector('direccion').textContent;
        const musica = xml.querySelector('musica').textContent;

        const nosotrosSection = document.getElementById('nosotros');
        nosotrosSection.innerHTML = `
            <h2>Sobre Nosotros</h2>
            <p>${horario}</p>
            <p>Correo electrónico: <a href="mailto:${correo}">${correo}</a></p>
            <p>Teléfono: ${telefono}</p>
            <p>Dirección: ${direccion}</p>
            <p>Música: ${musica}</p>
            <h3>Ubicación</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.696588486209!2d-13.536818284891293!3d28.9595821822869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4671bfad4a2f3d%3A0x403fbb31dfd199b2!2sMarina%20Lanzarote!5e0!3m2!1ses!2ses!4v1623696890567!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `;
    } catch (error) {
        console.error('Error al cargar el archivo XML:', error);
    }
});
