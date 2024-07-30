import React from "react";
import "./Products.css";

const Products = ({ product, onDelete }) => {
  const { _id, name, category, price, url, description } = product;

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
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
          <button className="edit-btn">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
  //   <div className="card">
  //     <img src={url} alt={name} />
  //     <h3>{name}</h3>
  //     <div className="card-info">
  //       <h5>({category})</h5>
  //       <h5>${price}</h5>
  //     </div>
  //   </div>
  // );
};

export default Products;
