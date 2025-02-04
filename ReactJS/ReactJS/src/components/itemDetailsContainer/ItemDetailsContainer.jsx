import { useState, useEffect } from "react";
import ItemDetails from "../itemDetails/ItemDetails";



import { getProductos } from "../../utils/productos";



import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(()=> {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])
    
  return (
    <div>
        <ItemDetails {...producto} />
    </div>
  )
}

export default ItemDetailsContainer