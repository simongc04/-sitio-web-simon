document.addEventListener('DOMContentLoaded', function () {
    const selectIdioma = document.getElementById('idioma');

    selectIdioma.addEventListener('change', function () {
        const idiomaSeleccionado = selectIdioma.value;
        const elementosTraducir = document.querySelectorAll('[data-traduccion]');

        elementosTraducir.forEach(elemento => {
            const claveTraduccion = elemento.dataset.traduccion;
            elemento.textContent = traducciones[claveTraduccion][idiomaSeleccionado] || traducciones[claveTraduccion].es;
        });
    });

    const traducciones = {
        inicio: { es: 'Inicio', en: 'Home' },
        nosotros: { es: 'Nosotros', en: 'About Us' },
        entradas: { es: 'Entradas', en: 'Tickets' },
        bebidas: { es: 'Bebidas', en: 'Drinks' },
        contacto: { es: 'Contacto', en: 'Contact' },
        formulario_titulo: { es: 'Formulario de Contacto', en: 'Contact Form' },
        nombre: { es: 'Nombre:', en: 'Name:' },
        email: { es: 'Correo Electrónico:', en: 'Email:' },
        mensaje: { es: 'Mensaje:', en: 'Message:' },
        enviar: { es: 'Enviar', en: 'Send' }
    };
});
