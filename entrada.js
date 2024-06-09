document.addEventListener('DOMContentLoaded', function () {
    var selectIdioma = document.getElementById('Selectoridioma');

    selectIdioma.addEventListener('change', function () {
        var idiomaSeleccionado = selectIdioma.value;
        var elementosTraducir = document.querySelectorAll('[data-traduccion]');

        elementosTraducir.forEach(function (elemento) {
            var claveTraduccion = elemento.dataset.traduccion;

            switch (idiomaSeleccionado) {
                case 'es':
                    elemento.textContent = traducciones[claveTraduccion].es;
                    break;
                case 'en':
                    elemento.textContent = traducciones[claveTraduccion].en;
                    break;
                default:
                    elemento.textContent = traducciones[claveTraduccion].es;
            }
        });
    });

    var traducciones = {
        inicio: {
            es: 'Inicio',
            en: 'Home'
        },
        nosotros: {
            es: 'Sobre Nosotros',
            en: 'About Us'
        },
        entradas: {
            es: 'Entradas',
            en: 'Tickets'
        },
        consumiciones: {
            es: 'Consumiciones',
            en: 'Drinks'
        },
        contacto: {
            es: 'Contacto',
            en: 'Contact'
        },
        mejor_fiesta: {
            es: '¡La Mejor Fiesta de la Ciudad! ',
            en: 'The Best Party in Town!'
        },
        compra_entrada: {
            es: 'Compra tu Entrada',
            en: 'Buy your Ticket'
        },
        sobre_nosotros: {
            es: 'Sobre Nosotros',
            en: 'About Us'
        },
        sobre_nosotros_texto: {
            es: 'Bienvenido a la Goofy Discotheque, el epicentro de la vida nocturna de la ciudad. Desde nuestras luces deslumbrantes hasta los ritmos vibrantes, creamos una atmósfera donde la diversión nunca se detiene. Con más de una década de experiencia, hemos perfeccionado el arte de la fiesta, ofreciendo a nuestros clientes una experiencia única e inolvidable cada noche.',
            en: 'Welcome to Goofy Discotheque, the epicenter of the city\'s nightlife. From our dazzling lights to the vibrant rhythms, we create an atmosphere where the fun never stops. With over a decade of experience, we have perfected the art of partying, offering our customers a unique and unforgettable experience every night.'
        },
        sobre_nosotros_texto_2: {
            es: 'Contamos con los mejores DJs, tanto locales como internacionales, que llenan nuestra pista de baile con los éxitos más candentes y los remixes más electrizantes. Nuestro equipo de bartenders expertos está siempre listo para preparar tus bebidas favoritas, desde clásicos elegantes hasta cócteles innovadores.',
            en: 'We have the best DJs, both local and international, who fill our dance floor with the hottest hits and the most electrifying remixes. Our team of expert bartenders is always ready to prepare your favorite drinks, from elegant classics to innovative cocktails.'
        },
        sobre_nosotros_texto_3: {
            es: 'En la Goofy Discotheque, la seguridad y la comodidad de nuestros clientes son nuestras principales prioridades. Ofrecemos diversas áreas VIP para aquellos que buscan una experiencia más exclusiva y un servicio excepcional. Además, nuestro sistema de sonido de última generación y nuestras impresionantes instalaciones de iluminación garantizan que cada noche sea un espectáculo visual y auditivo.',
            en: 'At Goofy Discotheque, the safety and comfort of our customers are our top priorities. We offer various VIP areas for those seeking a more exclusive experience and exceptional service. Additionally, our state-of-the-art sound system and stunning lighting facilities ensure that every night is a visual and auditory spectacle.'
        },
        entrada_normal: {
            es: 'Entrada Normal',
            en: 'Regular Ticket'
        },
        entrada_normal_texto: {
            es: 'Sumérgete en la atmósfera vibrante de Discoteca Nocturna con nuestra Entrada Normal. Disfruta del acceso a todas las áreas generales, donde podrás bailar al ritmo de los mejores DJs y disfrutar de nuestras espectaculares luces y sonido. Perfecta para aquellos que buscan una noche llena de energía y diversión.',
            en: 'Immerse yourself in the vibrant atmosphere of Nocturnal Discotheque with our Regular Ticket. Enjoy access to all general areas, where you can dance to the rhythm of the best DJs and enjoy our spectacular lights and sound. Perfect for those looking for a night full of energy and fun.'
        },
        entrada_vip: {
            es: 'Entrada VIP',
            en: 'VIP Ticket'
        },
        entrada_vip_texto: {
            es: 'Experimenta la fiesta con un toque de exclusividad con nuestra Entrada VIP. Esta entrada te da acceso a áreas exclusivas, donde podrás disfrutar de un servicio preferencial y un ambiente más selecto. Ideal para aquellos que buscan una experiencia más cómoda y personalizada mientras disfrutan de la mejor música y ambiente.',
            en: 'Experience the party with a touch of exclusivity with our VIP Ticket. This ticket gives you access to exclusive areas, where you can enjoy preferential service and a more select atmosphere. Ideal for those looking for a more comfortable and personalized experience while enjoying the best music and atmosphere.'
        },
        entrada_vip_master: {
            es: 'Entrada VIP Master',
            en: 'VIP Master Ticket'
        },
        entrada_vip_master_texto: {
            es: 'Para los verdaderos amantes de la fiesta, la Entrada VIP Master ofrece lo máximo en lujo y comodidad. Con esta entrada, tendrás acceso a todas las áreas exclusivas, servicio preferencial, y además, bebidas incluidas toda la noche. Perfecta para aquellos que quieren vivir una noche sin límites, disfrutando del mejor servicio y la mejor música en un ambiente de élite.',
            en: 'For true party lovers, the VIP Master Ticket offers the utmost in luxury and comfort. With this ticket, you ll have access to all exclusive areas, preferential service, and also, drinks included all night. Perfect for those who want to live a night without limits, enjoying the best service and music in an elite atmosphere.'
        }
    };
});
