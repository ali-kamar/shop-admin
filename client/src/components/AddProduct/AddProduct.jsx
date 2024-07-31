import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Modal from "./Modal/Modal";
import "./AddProduct.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    url: "",
    description: "",
  });
  const [isModal, setIsModal] = useState({
    isModalOpen: false,
    modalContent: "",
    isError: false
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleBtnClick = () => {
    navigate("/");
  };

  const closeModal = () => {
    setIsModal({
      isModalOpen: false,
      modalContent: "",
      isError: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/products", formData);
      if (response.data) {
        setIsModal({
          isModalOpen: true,
          modalContent: "Product Added Successfully",
          isError: false,
        });
        setFormData({
          name: "",
          category: "",
          price: "",
          url: "",
          description: "",
        });
      }
    } catch (err) {
      setIsModal({
        isModalOpen: true,
        modalContent: `${err.response.data.msg}`,
        isError: true,
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
    <div className="form-div-add">
      <form className="form-add" onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        {isModal.isModalOpen && (
          <Modal
            closeModal={closeModal}
            modalContent={isModal.modalContent}
            isError={isModal.isError}
          />
        )}
        <div className="inputs-add">
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="category">Category :</label>
          <select
            id="category"
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
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <label htmlFor="url">Url :</label>
          <input
            id="url"
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
          <label htmlFor="description">Description :</label>
          <input
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-btn-add">
          <button className="btn" type="submit">
            Add
          </button>
          <button className="btn" type="button" onClick={handleBtnClick}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
