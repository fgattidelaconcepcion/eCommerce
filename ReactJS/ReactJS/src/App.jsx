import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Componentes 
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Componentes adicionales para las rutas
import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => {
  const remera = {
    nombre: 'remeraPirata',
    precio: 700
  };

  return (
    <Router>
      {/*enlaces de navegación */}
      <NavBar />
      <CartWidget />  

      {/* Links de navegación */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>

      {/* Aquí renderizas los componentes dependiendo de la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productos" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
