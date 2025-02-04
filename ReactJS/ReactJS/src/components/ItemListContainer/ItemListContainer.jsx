import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from "../../utils/productos";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();  // Obtener la categoría desde la URL

  useEffect(() => {
    getProductos()
      .then((productos) => {
        const productosFiltrados = categoria
          ? productos.filter((producto) => producto.categoria === categoria)
          : productos;  // Filtrar los productos si hay categoría
        setProductos(productosFiltrados);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, [categoria]);  // Recargar los productos si cambia la categoría

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
