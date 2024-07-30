import React, { useState } from "react";
import axios from "../../api/axios";
import "./EditForm.css";
import Modal from "./Modal/Modal";

const EditForm = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price,
    url: product.url,
    description: product.description,
  });

  const [isModal, setIsModal] = useState({
    isModalOpen: false,
    modalContent: "",
  });

  const closeModal = () => {
    setIsModal({
      isModalOpen: false,
      modalContent: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`/products/${product._id}`, formData);
      if (data) {
        onSave(data.product);
        onClose();
      }
    } catch (err) {
        setIsModal({
          isModalOpen: true,
          modalContent: `${err.response.data.msg}`,
        });
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const categories = [
      "kitchen",
      "shisha",
      "detergents",
      "makeup",
      "decorations",
      "toys",
      "sanitary",
      "toolkit",
      "electronics",
      "outdoors",
    ];
  return (
    <div className="form-div-edit">
      <form className="form-edit" onSubmit={handleSubmit}>
        <h2>Edit Product</h2>
        <div className="inputs-edit">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="category">Category :</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="price">Price :</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <label htmlFor="url">Url :</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-btn-edit">
          <button className="btn" type="submit">
            Edit
          </button>
          <button className="btn" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
        {isModal.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={isModal.modalContent} />
        )}
      </form>
    </div>
  );
};

export default EditForm;
