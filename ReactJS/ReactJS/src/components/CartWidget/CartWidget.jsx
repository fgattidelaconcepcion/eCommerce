import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  const imgCarrito = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qvE--IoG9ZSyM7fjtT9Rj_FDfi2fCcrUzA&s';
    
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="imagen del carrito de compras" />
    </div>
  )
}

export default CartWidget