// src/components/cartItem/CartItem.jsx
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <p>Total: ${item.precio * cantidad}</p>

      {/* Botón para eliminar producto del carrito */}
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
