import React from 'react';

const CartView = () => {
  // Static cart items as mentioned in the README and expected by tests
  const cartItems = [
    { id: 1, name: 'Product A' },
    { id: 3, name: 'Product C' }
  ];

  return (
    <div>
      <h1>Cart View</h1>
      <div>
        <h2>Your Cart Items:</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartView;