import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ProductList onAddToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;