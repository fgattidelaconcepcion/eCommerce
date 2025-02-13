import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito.</h2>
        <Link to="/">Ver productos</Link>
      </>
    );
  }

  return (
    <div>
      <h2>Tu carrito de Compras</h2>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <h3>Total: ${total}</h3>
      <h3>Cantidad total: {cantidadTotal}</h3>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
