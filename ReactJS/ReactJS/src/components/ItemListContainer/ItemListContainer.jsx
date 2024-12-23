import React, { useState } from 'react';

const ItemListContainer = () => {
  // Estado para mostrar el mensaje
  const [mensajeVisible, setMensajeVisible] = useState(false);

  // Función para manejar el clic del botón
  const mostrarMensaje = () => {
    setMensajeVisible(true);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      
      {/* Botón que activa la función mostrarMensaje */}
      <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
      
      {/* Mostrar el mensaje si mensajeVisible es true */}
      {mensajeVisible && <p>¡Has hecho click en el botón!</p>}
    </div>
  );
};

export default ItemListContainer;
