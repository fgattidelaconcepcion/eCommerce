/*export const misProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: "1", nombre: "Shoes", stock:10, precio: 700, img: "/img/ChampionesPirataz.webp", idCat:"calzado",descripcion:"aaa" },
          { id: "2", nombre: "Remera",stock:10, precio: 4000, img: "/img/RemeraPirataz.webp", idCat: "ropa",descripcion:"abs" },
          { id: "3", nombre: "Short",stock:10, precio: 2000, img: "/img/ShortPirata.jfif", idCat: "ropa",descripcion:"asdasda" },
          { id: "4", nombre: "Pantalón",stock:10, precio: 3500, img: "/img/pantalon.pirata.jpg", idCat: "ropa",descripcion:"asdasdas"}
        ]);
      }, 2000);
    });
  };

  export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 100);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item =>item.id === id);
            resolve(producto)
        },100)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1000)
    })
}*/