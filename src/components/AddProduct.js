import React, { useState } from "react";
import axios from "axios";
import "../CustomStyles/style.css"; 

const AddProduct = ({ refreshProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Name and Price are required!");
    await axios.post("https://ecommerce-backend-2-qcq1.onrender.com/api/products", {
      name,
      price,
      image,
    });
    setName("");
    setPrice("");
    setImage("");
    refreshProducts();
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-box"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-box"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
