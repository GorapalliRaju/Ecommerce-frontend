import React from 'react';
import '../CustomStyles/Cart.css';

const Cart = ({ products, cartItems, removeFromCart }) => {
  const cartProducts = products.filter((p) => cartItems.includes(p._id));

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartProducts.map((product) => (
            <li key={product._id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-img" />
              <div className="cart-item-details">
                <p className="cart-item-name">{product.name}</p>
                <p className="cart-item-price">${product.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(product._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
