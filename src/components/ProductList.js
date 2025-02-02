import React from 'react';
import '../CustomStyles/ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p className="no-products">No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product._id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
