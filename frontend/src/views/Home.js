import React from 'react';

function Home() {

  // Función para cerrar sesión y eliminar el token
  const logout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
  
  };


  return (
    <div className='form-container'>
      <h2>Home Page</h2>
      <p>Bienvenido a la página de inicio</p>
      {/* Agregar el botón para cerrar sesión */}
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
