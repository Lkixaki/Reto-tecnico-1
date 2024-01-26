document.addEventListener('DOMContentLoaded', async function () {
    try {
        const productsData = await fetchDataFromAPI();
        renderTable(productsData);
        
        // Initialize DataTable after rendering the table
        initDataTable();
    } catch (error) {
        console.error('Error en la obtención de datos:', error);
        // Puedes manejar el error aquí según tus necesidades
    }
});


function renderTable(data) {
    const tableBody = document.getElementById('tabla-body');

    // Limpiar el cuerpo de la tabla
    tableBody.innerHTML = '';

    // Llenar la tabla con los datos de la respuesta de la API
    data.forEach(product => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td class="text-center">${product.title}</td>
            <td class="text-center">${product.price}</td>
            <td class="text-center">${product.description}</td>
            <td class="text-center">${product.category}</td>
            <td class="text-center">
            <button type="button" class="btn btn-warning" onclick="showImageAlert('${product.title}', '${product.image}')">
                Ver Imagen
            </button>
        </td>
            <td class="text-center">${product.rating.rate}</td>
            <td class="text-center"><input type="checkbox"></td>
        `;
    });
}


function showImageAlert(title, imageUrl) {
    Swal.fire({
        title: title,
        imageUrl: imageUrl,
        imageWidth: '80%', // Ajusta el ancho de la imagen según tus necesidades
        imageAlt: "Custom image",
        backdrop: 'rgba(0,0,123,0.4) left top no-repeat'
    });
}

function setupEventListeners(data) {
    // Aquí puedes agregar más lógica del controlador y configurar eventos si es necesario
    // Puedes acceder a 'data' que es la respuesta de la API
    console.log('Datos disponibles en el controlador:', data);
}
