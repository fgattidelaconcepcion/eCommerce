const misProductos = [
    {id : 1, nombre: "Shoes", precio: 700,img:"./img/ChampionesPirataz.webp"},
    {id : 2, nombre: "Remera", precio: 4000,img:"./img/RemeraPirataz.webp"},
    {id : 3, nombre: "Short", precio: 2000,img:"./img/ShortPirata.jfif"},

]

 export const getProductos = () => {
    return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(misProductos)
    },2000)
    })
}