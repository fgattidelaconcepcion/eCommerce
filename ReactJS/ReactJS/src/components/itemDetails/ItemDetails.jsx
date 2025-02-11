import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import Contador from '../contador/Contador';

const ItemDetails = ({ id, nombre, stock, precio, img, descripcion }) => {

  const {agregarAlCarrito} = useContext(CarritoContext)

  //Creamos un estado local con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id,nombre, precio}
    agregarAlCarrito(item,cantidad)
    toast.success("Su compra fue enviada al carrito", {autoClose: 1000,theme: "dark", position: "top-center"})
  }


  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p> {descripcion}</p>

      {
        //Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }



    </div>
  )
}
export default ItemDetails;