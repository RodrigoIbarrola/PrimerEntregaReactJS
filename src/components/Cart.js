import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveFromCart(item)}>Eliminar del carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;