import React, { useState, useEffect } from 'react';
import { getProductos } from "../../utils/productos";
import ItemList from "./ItemList/ItemList";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then((productos) => {
        console.log("Productos cargados:", productos); // Verifica si los productos se están cargando
        setProductos(productos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Mensaje de carga mientras se obtienen los productos
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
