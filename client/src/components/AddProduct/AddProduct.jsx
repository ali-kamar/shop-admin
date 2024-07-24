import React from 'react'
import './AddProduct.css'
const AddProduct = () => {
  return (
    <div className="form-div">
      <form className="form">
        <h2>Add Product</h2>
        <div className="inputs">
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" />
          <label htmlFor="category">Category :</label>
          <input type="text" name="ategory" />
          <label htmlFor="price">Price :</label>
          <input type="number" name="price" />
          <label htmlFor="url">Url :</label>
          <input type="text" name="url" />
          <label htmlFor="description">Description :</label>
          <input type="text" name="description" />
        </div>
        <div className="form-btn">
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct