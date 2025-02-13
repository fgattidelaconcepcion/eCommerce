import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../itemList/ItemList";
import { db } from '../../services/config';
import {collection,getDocs,query,where} from "firebase/firestore";
/*import Loader from "../Loader/Loader";*/

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams();

    useEffect(()=>{
        setLoading(true)
        const misProductos = idCategoria ? query(collection(db,"productos"), where ("idCat", "==", idCategoria)) : collection(db, "productos")

        getDocs(misProductos)
          .then(res => {
            const nuevosProductos = res.docs.map(doc => {
                const data= doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
          })
          .catch(error => console.log(error))
          .finally(() => { 
            console.log("Proceso terminado");
            setLoading(false)
        })
    },[idCategoria])

 /* useEffect(() => {
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
*/
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