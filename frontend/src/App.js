import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Ticket from './components/Ticket';
import Register from './views/Register';
import PrivateRoute from './components/Auth';
import PruebasNav from './views/PruebasNav';
import MesaAyuda from './views/MesaAyuda';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<PrivateRoute component={Register} />} />
          <Route path="/MesaAyuda" element={<MesaAyuda/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


