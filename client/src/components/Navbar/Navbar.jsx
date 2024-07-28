import React from "react";
import SearchBar from "./components/SearchBar";
import CategoryDropdown from "./components/CategoryDropdown";
import AddProductButton from "./components/AddProductButton";
import './Navbar.css'
//{ categories, onSearch, onCategorySelect }
const Navbar = ({ onCategorySelect }) => {
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
    <div className="navbar">
      <AddProductButton />
      <CategoryDropdown
        categories={categories}
        onCategorySelect={onCategorySelect}
      />
      <SearchBar />
    </div>
  );
};

export default Navbar;
