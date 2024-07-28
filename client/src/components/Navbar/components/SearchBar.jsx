import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
 const [name, setName] = useState('')
 const handleChange = (e) => {
  setName(e.target.value)
  onSearch(e.target.value)
 }
 const clear = () => {
  setName("")
  onSearch("")
 }
  return (
    <div className="inputBox_container">
      <svg
        className="search_icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        alt="search icon"
      >
        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
      </svg>
      <input
        onChange={handleChange}
        value={name}
        className="inputBox"
        id="inputBox"
        type="text"
        placeholder="Search For Products"
      />
      {name.length !== 0 && (
        <button onClick={clear} style={{background:'none', border:'none'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
            style={{width:'40px', height:'25px'}}
          >
            <path d="M4.646 4.646a.5.5 0 011 0L8 7.293l2.354-2.647a.5.5 0 11.707.707L8.707 8l2.354 2.354a.5.5 0 11-.707.707L8 8.707l-2.354 2.354a.5.5 0 01-.707-.707L7.293 8 4.646 5.646a.5.5 0 010-.707z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
