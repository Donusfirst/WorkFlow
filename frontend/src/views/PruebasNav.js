import React from 'react';
import Navbar from '../components/Navbar';
import UserDatos from '../components/UserDatos';
import Footer from '../components/Footer';
import "../Styles/PruebasNav.css";


function PruebasNav() {

  return (
    <div>
      <Navbar/>
      <div>
        <UserDatos/> 
      </div>
      <Footer/>
    </div>
  );
}

export default PruebasNav;

