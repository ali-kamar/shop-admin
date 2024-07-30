import React, { useState } from "react";
import "./Products.css";
import EditForm from "../../EditProduct/EditForm";

const Products = ({ product, onDelete, onEdit }) => {
  const { _id, name, category, price, url, description } = product;
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedProduct) => {
    onEdit(updatedProduct);
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={url} alt={name} />
        </div>
        <div className="category">
          <h3>{name}</h3>
        </div>
        <div className="heading">
          <p>{category}</p>
          <p>${price}</p>
        </div>
        <div className="author">
          <p>{description}</p>
          <div className="btns">
            <button className="edit-btn" onClick={handleEdit}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="form-div-edit">
          <EditForm
            product={product}
            onClose={handleClose}
            onSave={handleSave}
          />
        </div>
      )}
    </>
  );
};

export default Products;
