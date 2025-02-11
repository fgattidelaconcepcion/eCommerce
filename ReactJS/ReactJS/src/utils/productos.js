export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, nombre: "Shoes", precio: 700, img: "/img/ChampionesPirataz.webp", categoria: "calzado" },
          { id: 2, nombre: "Remera", precio: 4000, img: "/img/RemeraPirataz.webp", categoria: "ropa" },
          { id: 3, nombre: "Short", precio: 2000, img: "/img/ShortPirata.jfif", categoria: "ropa" },
          { id: 4, nombre: "Pantalón", precio: 3500, img: "/img/pantalon.pirata.jpg", categoria: "ropa" }
        ]);
      }, 2000);
    });
  };

