import React from 'react';

const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Iphone', price: 100 },
    { id: 2, name: 'Samsung', price: 200 },
    { id: 3, name: 'Nokia', price: 300 },
  ];

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
