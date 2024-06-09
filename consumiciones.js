document.addEventListener('DOMContentLoaded', function () {
    var selectIdioma = document.getElementById('Selectoridioma');

    selectIdioma.addEventListener('change', function () {
        var idiomaSeleccionado = selectIdioma.value;
        var elementosTraducir = document.querySelectorAll('[data-traduccion]');
        
        elementosTraducir.forEach(function (elemento) {
            var claveTraduccion = elemento.dataset.traduccion;
            var traduccion = traducciones[claveTraduccion][idiomaSeleccionado];
            elemento.textContent = traduccion || elemento.textContent;
        });
    });
});

var traducciones = {
    "Inicio": { "es": "Inicio", "en": "Home" },
    "Sobre Nosotros": { "es": "Sobre Nosotros", "en": "About Us" },
    "Entradas": { "es": "Entradas", "en": "Tickets" },
    "Consumiciones": { "es": "Consumiciones", "en": "Drinks" },
    "Contacto": { "es": "Contacto", "en": "Contact" },
    "Nuestras Especialidades": { "es": "Nuestras Especialidades", "en": "Our Specialties" },
    "Sumérgete en nuestra variedad de deliciosas bebidas que te mantendrán bailando toda la noche.": { "es": "Sumérgete en nuestra variedad de deliciosas bebidas que te mantendrán bailando toda la noche.", "en": "Dive into our variety of delicious drinks that will keep you dancing all night long." }
};
