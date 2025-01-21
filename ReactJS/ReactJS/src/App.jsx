import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Componentes 
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Componentes adicionales para las rutas
import Home from './Home';
import About from './About';

const App = () => {
  const remera = {
    nombre: 'remeraPirata',
    precio: 700
  };

  return (
    <Router>
      {/* Aquí tienes los enlaces de navegación */}
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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/productos" component={ItemListContainer} />
    </Router>
  );
};

export default App;
