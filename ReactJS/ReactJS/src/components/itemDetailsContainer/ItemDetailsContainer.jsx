import { useState, useEffect } from "react";
import ItemDetails from "../itemDetails/ItemDetails";
import { useParams } from "react-router-dom";



const ItemDetailsContainer = () => {
    const [productos, setProducto] = useState(null);
    
    const {idItem} = useParams();

    useEffect(()=> {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])
    
  return (
    <div>
        <ItemDetails {...productos} />
    </div>
  )
}

export default ItemDetailsContainer