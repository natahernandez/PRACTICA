document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('movieForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const movieData = {
            imdbID: document.getElementById('imdbID').value,
            Title: document.getElementById('title').value,
            Year: document.getElementById('year').value,
            Type: document.getElementById('type').value,
            Poster: document.getElementById('poster').value,
            description: document.getElementById('description').value,
            Ubication: document.getElementById('ubication').value,
            Estado: parseInt(document.getElementById('estado').value)
        };

        fetch('https://movie.azurewebsites.net/api/cartelera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud');
            }
        })
        .then(data => {
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.classList.add('success', 'alert');
            responseMessage.textContent = 'Película agregada exitosamente.';
            responseMessage.style.display = 'block';
        })
        .catch(error => {
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.classList.add('error', 'alert');
            responseMessage.textContent = 'Error al agregar la película: ' + error.message;
            responseMessage.style.display = 'block';
        });
    });
});
