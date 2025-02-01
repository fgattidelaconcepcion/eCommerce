import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

import React from 'react'
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay product0s en el carrito. Compra de una vez maldito</h2>
                <Link to = "/"> Ver Productos</Link>
            </>
        )
    }


  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }
            <h3>TOtal: ${total}</h3>
            <h3>Cantidad total: {cantidadTotal}</h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart