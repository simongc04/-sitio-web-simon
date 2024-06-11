document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('informacion2.xml');
        if (!response.ok) {
            throw new Error('Error loading XML file');
        }
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');

        const schedule = xml.querySelector('schedule').textContent;
        const email = xml.querySelector('email').textContent;
        const phone = xml.querySelector('phone').textContent;
        const address = xml.querySelector('address').textContent;
        const music = xml.querySelector('music').textContent;

        const aboutUsSection = document.getElementById('nosotros');
        aboutUsSection.innerHTML = `
            <h2>About Us</h2>
            <p>${schedule}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <p>Music: ${music}</p>
            <h3>Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.696588486209!2d-13.536818284891293!3d28.9595821822869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4671bfad4a2f3d%3A0x403fbb31dfd199b2!2sMarina%20Lanzarote!5e0!3m2!1ses!2ses!4v1623696890567!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `;
    } catch (error) {
        console.error('Error loading XML file:', error);
    }
});
