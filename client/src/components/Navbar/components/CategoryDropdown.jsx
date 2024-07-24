import React from "react";

const CategoryDropdown = ({ categories }) => {
  return (
    <div className="category-dropdown">
      <select>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
