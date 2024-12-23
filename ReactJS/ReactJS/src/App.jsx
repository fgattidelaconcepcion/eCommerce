import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  const remera = {
    nombre: 'remeraPirata',
    precio: 700
  };

  return (
    <>
      <NavBar />
      <CartWidget />  
      <ItemListContainer/>
    </>
  );
};

export default App;
