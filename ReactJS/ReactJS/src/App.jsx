import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Componentes
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Componentes adicionales para las rutas
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      {/* Navegación */}
      <NavBar />
      <CartWidget />

      {/* Links de navegación */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
