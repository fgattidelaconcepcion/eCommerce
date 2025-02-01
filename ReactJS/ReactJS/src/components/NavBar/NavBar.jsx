import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>Pirate Clothes</h1> {/* Esta línea está bien ahora */}
        
        <nav>
            <ul>
                <li>Ropa</li>
                <li>Calzados</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  );
};

export default NavBar;
