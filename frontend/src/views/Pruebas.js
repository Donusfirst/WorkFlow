import React from 'react';

function Users() {

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjunta el token almacenado en el localStorage en el encabezado de autorización
        }

      });
      
      if (response.status === 401) {
        // Si la respuesta del servidor es 401 (No autorizado), redirige al usuario al inicio de sesión
        window.location.href = '/login';

        return;
      }
      
      const data = await response.json();
      console.log(data); // Imprimir los usuarios en la consola
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <button onClick={getUsers}>Obtener Usuarios</button>
    </div>
  );
}

export default Users;
