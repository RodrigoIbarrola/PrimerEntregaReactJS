import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="/carrito.png"
        alt="Icono de carrito"
        style={{
          width: '24px',
          height: '24px',
          marginRight: '5px', 
        }}
      />
    </div>
  );
};

export default CartWidget;
