import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/PruebasNav.css";
import BibliotecaModal from '../components/BibliotecaModal';




function Biblioteca() {

  return (
    <div>
      <Navbar/>
      <div>
        <h1>Hola mundo</h1>
        <BibliotecaModal/>
      </div>
      <Footer/>
    </div>
  );
}

export default Biblioteca;

