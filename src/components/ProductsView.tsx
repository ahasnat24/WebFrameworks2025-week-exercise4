import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../products.js';

const Product = ({ product }) => {
  return (
    <div 
      data-testid={`product-${product.id}`}
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        margin: '10px',
        borderRadius: '8px'
      }}
    >
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

const ProductsView = () => {
  const products = getAllProducts();

  return (
    <div>
      <h1>Shop Products</h1>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsView;