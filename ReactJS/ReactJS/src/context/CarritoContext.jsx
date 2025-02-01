import { useState, createContext } from "react";

// Crear el contexto con un valor predeterminado
export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0
});

// CarritoProvider con los métodos que proporcionará a los componentes
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find(prod => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito(prev => [...prev, { item, cantidad }]);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + item.precio * cantidad);
    }
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  // Función para eliminar un producto específico del carrito
  const eliminarProducto = (id) => {
    const productoAEliminar = carrito.find(prod => prod.item.id === id);

    if (productoAEliminar) {
      setCarrito(prev => prev.filter(prod => prod.item.id !== id));
      setCantidadTotal(prev => prev - productoAEliminar.cantidad);
      setTotal(prev => prev - productoAEliminar.item.precio * productoAEliminar.cantidad);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        vaciarCarrito,
        eliminarProducto
      }}
    >
      {children} {/* Aquí se renderizan los componentes hijos */}
    </CarritoContext.Provider>
  );
};
