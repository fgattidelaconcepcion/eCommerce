// src/components/Item/Item.jsx
import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAgregarAlCarrito = () => {
    // Llamar a la función para agregar el producto al carrito
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, 1); // Agregar una cantidad de 1 por defecto
  };

  return (
    <div className="item">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>

      {/* Botón para agregar al carrito */}
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>

      {/* Enlace a la página de detalles del producto */}
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
