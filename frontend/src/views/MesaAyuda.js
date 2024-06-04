import React from 'react';
import Ticket from '../components/Ticket';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Styles/MesaAyuda.css';

function MesaAyuda() {

  return (
   <div>
      <Navbar/>
      <div>
        <Ticket/>
      </div>
      <Footer />
    </div>
  );
}

export default MesaAyuda;