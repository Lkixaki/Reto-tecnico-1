// Función para obtener los datos de la API
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Lanzar el error para que el controlador pueda manejarlo si es necesario
    }
}

// Ejemplo de uso:
// fetchDataFromAPI() se encuentra en el mismo archivo (js/model.js)
fetchDataFromAPI()
    .then(data => {
        console.log('Datos obtenidos:', data);
        // Enviar la respuesta al controlador
        sendResponseToController(data);
    })
    .catch(error => {
        console.error('Error en la obtención de datos:', error);
        // Puedes manejar el error aquí según tus necesidades
    });

// Función para enviar la respuesta al controlador
function sendResponseToController(data) {
    // Aquí puedes realizar cualquier procesamiento adicional o enviar la respuesta directamente al controlador
    console.log('Enviando datos al controlador:', data);
}
