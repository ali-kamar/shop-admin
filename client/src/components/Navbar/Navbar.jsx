import React from "react";
import SearchBar from "./components/SearchBar";
import CategoryDropdown from "./components/CategoryDropdown";
import AddProductButton from "./components/AddProductButton";
import './Navbar.css'
//{ categories, onSearch, onCategorySelect }
const Navbar = () => {
  const categories = ['kitchen', 'shisha']
  return (
    <div className="navbar">
      <AddProductButton />
      <CategoryDropdown
        categories={categories}
        // onCategorySelect={onCategorySelect}
      />
      <SearchBar 
     // onSearch={onSearch}
       />
    </div>
  );
};

export default Navbar;
