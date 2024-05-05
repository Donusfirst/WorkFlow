import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../Styles/FormLogin.css'; // Importa tu archivo de estilos CSS
import '../Styles/boton.css';

function Login() {
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(null);
  const catpcha = useRef(null);
   
  const onChange = () => {
    if (catpcha.current.getValue()){
      console.log(catpcha.current.getValue())
    }
  }
  
  const submit = async (e) => {
    e.preventDefault();

    // Extrae el nombre de usuario y contraseña del formulario
    const nombreUsuario = e.target.elements.nombreUsuario.value;
    const contrasena = e.target.elements.contrasena.value;
   
    // Envía una solicitud POST al servidor Node.js
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUsuario, contrasena }),
      });

      const data = await response.json(); 
      if (data.success) {
        console.log('Inicio de sesión exitoso');
        cambiarUsuarioValido(true);
        // Almacenar el token en el almacenamiento local del navegador
        localStorage.setItem('token', data.token);

        window.location.href = '/'

      } else {
        console.log('Credenciales incorrectas');
        cambiarUsuarioValido(false);
      }
    } catch (error) {
      console.error('Error al enviar solicitud al servidor:', error);
    }
    
    if (catpcha.current.getValue()){
      console.log('El usuario no es un robot');
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
      console.log(catpcha.current.getValue());
    } else {
      console.log('acepta el captcha');
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  }


  // Función para cerrar sesión y eliminar el token
  const register = () => {
    // Redirigir al usuario a la página de registro de sesión
    window.location.href = '/register';
  };
  
  return (
    <div className="container">
      <div className="form-container">
        <h2>Iniciar Sesion</h2>
        <form onSubmit={submit}>
          <label>
            <input type="text" placeholder="Nombre de usuario" name= "nombreUsuario" autocomplete="off"/>
          </label>
          <label>

            <input type="password" placeholder="Contraseña" name="contrasena" />
          </label>

          <div> 
          <ReCAPTCHA
          ref={catpcha}
          sitekey="6LevSKspAAAAAEkO1bS85IlnFZQuLV-WT9jmBD6t"
          onChange={onChange}
          className="custom-recaptcha" // Clase para aplicar estilos
          />
          </div>
          <div>
             <h2></h2>
          </div>
          <div>
          <button type="submit" className='btn10' style={{ margin: "0 auto" }}>Iniciar sesión</button>
          </div>         
        </form>
        
      </div>
    </div>
    
  );
}

export default Login;
