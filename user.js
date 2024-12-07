let usersData = []; // Variable global para almacenar los usuarios

// Función para cargar todos los usuarios desde la API
async function fetchUsers() {
    try {
        // Realizamos la solicitud fetch para obtener los datos
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        usersData = await response.json(); // Guardamos los datos en la variable global
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
}

// Función para buscar un usuario por su ID
async function searchUser() {
    const searchId = document.getElementById('searchId').value; // Obtenemos el valor del input
    
    // Limpiar la sección de información del usuario antes de mostrar nuevos datos
    document.getElementById('userInfo').style.display = 'none';
    
    if (searchId) {
        // Buscar al usuario por el ID en la lista de usuarios
        const user = usersData.find(user => user.id === parseInt(searchId));
        
        if (user) {
            // Si el usuario existe, mostrar la información en el contenedor
            document.getElementById('userId').textContent = user.id;
            document.getElementById('userName').textContent = user.name;
            document.getElementById('userUsername').textContent = user.username;
            document.getElementById('userEmail').textContent = user.email;
            
            // Mostrar la dirección desglosada
            document.getElementById('userStreet').textContent = user.address.street;
            document.getElementById('userSuite').textContent = user.address.suite;
            document.getElementById('userCity').textContent = user.address.city;
            document.getElementById('userZipcode').textContent = user.address.zipcode;
            document.getElementById('userLat').textContent = user.address.geo.lat;
            document.getElementById('userLng').textContent = user.address.geo.lng;
            
            document.getElementById('userPhone').textContent = user.phone;
            document.getElementById('userWebsite').textContent = user.website;
            
            // Mostrar la información de la compañía
            document.getElementById('userCompanyName').textContent = user.company.name;
            document.getElementById('userCompanyCatchPhrase').textContent = user.company.catchPhrase;
            document.getElementById('userCompanyBS').textContent = user.company.bs;
            
            // Mostrar la información del usuario
            document.getElementById('userInfo').style.display = 'block';
        } else {
            alert("Usuario no encontrado con ese ID.");
        }
    } else {
        alert("Por favor, ingresa un ID.");
    }
}

// Cargar los usuarios al inicio
window.onload = () => {
    fetchUsers(); // Cargamos los usuarios al iniciar la página
};
