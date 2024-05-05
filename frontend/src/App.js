import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Pruebas from './views/Pruebas';
import Register from './views/Register';
import PrivateRoute from './components/Auth';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pruebas" element={<PrivateRoute component={Pruebas} />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<PrivateRoute component={Register} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


