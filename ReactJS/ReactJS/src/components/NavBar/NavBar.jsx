import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>Pirate Clothes</h1> {/* Esta línea está bien ahora */}
        
        <nav>
            <ul>
                <li>Remeras</li>
                <li>Pantalones</li>
                <li>Canguros</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  );
};

export default NavBar;
