import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer';
import Cart from './components/cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';

import Home from './components/Home/Home';


const App = () => {
  return (
    <BrowserRouter>
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
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </CarritoProvider>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;