// Componente Item que renderiza un producto
const Item = ({ nombre, precio, img }) => {
  return (
    <div className="item">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
};

export default Item;
