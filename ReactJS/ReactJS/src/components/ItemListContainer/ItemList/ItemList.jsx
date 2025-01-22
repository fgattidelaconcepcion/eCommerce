import React from 'react';

// Componente Item que renderiza un producto
const Item = ({ nombre, precio, img }) => {
  return (
    <div className="item">
      <img src={img} alt={nombre} width={100} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
};

// Componente ItemList que renderiza todos los productos
const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
