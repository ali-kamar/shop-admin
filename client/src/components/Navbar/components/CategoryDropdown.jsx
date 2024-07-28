import React, { useState } from "react";
import "./CustomDropdown.css";

const CategoryDropdown = ({ categories, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onCategorySelect(category); 
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedCategory}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 011 .001L8 9.293l5.354-4.646a.5.5 0 11.707.707l-6 5.25a.5.5 0 01-.707 0l-6-5.25a.5.5 0 01.707-.707z"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          <li
            className="dropdown-item"
            onClick={() => handleCategorySelect("All")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className="dropdown-item"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
