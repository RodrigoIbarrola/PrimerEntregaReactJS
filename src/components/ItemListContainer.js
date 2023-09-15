import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h1>{greeting}</h1>
      {"Productos destacados de la tienda"}
    </div>
  );
};

export default ItemListContainer;