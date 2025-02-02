import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import axios from 'axios';
import './CustomStyles/App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://ecommerce-backend-2-qcq1.onrender.com/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get('https://ecommerce-backend-2-qcq1.onrender.com/api/cart');
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axios.post('https://ecommerce-backend-2-qcq1.onrender.com/api/cart', { productId });
      fetchCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`https://ecommerce-backend-2-qcq1.onrender.com/api/cart/${productId}`);
      fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div className="app">
      <h1>E-Commerce Store</h1>
      <AddProduct refreshProducts={fetchProducts} />
      <ProductList addToCart={addToCart} products={products} />
      <Cart products={products} cartItems={cartItems} removeFromCart={removeFromCart} />
      <p style={{textAlign:'center'}}>Made with 🧡 By Raju Gorapalli</p>
    </div>
  );
}

export default App;
