import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from "../../../context/CarritoContext.jsx";


// Importa el componente Contador
import Contador from "../../Contador/Contador";

const ItemDetails = ({ id, nombre, stock, precio, img }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Creamos una función manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>

      {/* Lógica de montaje y desmontaje del contador */}
      {
        agregarCantidad > 0 ? (
          <Link to="/cart">Terminar Compra</Link>
        ) : (
          <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )
      }
    </div>
  );
};

export default ItemDetails;
