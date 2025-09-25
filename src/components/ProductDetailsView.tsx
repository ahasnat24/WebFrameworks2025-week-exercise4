import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../products.js';

const ProductDetailsView = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <Link to="/">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Rating:</strong> {product.rating}/5</p>
      </div>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetailsView;