// src/components/itemDetails/ItemDetails.jsx
import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import Contador from '../contador/Contador';

const ItemDetails = ({ id, nombre, stock, precio, img }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad); // Agregar al carrito con la cantidad seleccionada
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: ${precio}</h3>
      <img src={img} alt={nombre} />
      <p>Descripción del producto: Lorem ipsum...</p>

      {/* Muestra el contador para agregar cantidad al carrito */}
      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetails;
