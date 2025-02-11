// src/components/Item/Item.jsx
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {

  return (
    <div className="item">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>

      {/* Enlace a la página de detalles del producto */}
      <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
