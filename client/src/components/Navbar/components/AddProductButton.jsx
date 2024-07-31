import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"
const AddProductButton = () => {
  return (
    <div className="add-product-button">
      <Link to="/add-product">
        <button className="btn">Add Product</button>
      </Link>
    </div>
  );
};

export default AddProductButton;
