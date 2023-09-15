import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-brand">Mi Tienda</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
