import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer';
import Cart from './components/cart/Cart';

import Home from './components/Home/Home';


const App = () => {
  return (
    <Router>
      <CarritoProvider>
        <NavBar />
        <CartWidget />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos/ropa">Ropa</Link></li>
            <li><Link to="/productos/calzado">Calzado</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CarritoProvider>
    </Router>
  );
};

export default App;
