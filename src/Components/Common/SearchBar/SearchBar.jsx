import "./SearchBar.css";
import {useState} from "react";

const SearchBar = ({setSearchQuery}) => {
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setSearchQuery(value);
  };

  return (
    <>
      <div className="search-container">
        <h1 className="head-text">
          Discover Recipes That Suit You <span>Perfectly.</span>
        </h1>
        <div className="search-inputs">
          <form onSubmit={submitForm}>
            <input
              onChange={(e) => setValue(e.target.value)}
              className="search-box"
              type="text"
              placeholder="Enter Recipe"
            />
            <button className="btn">Find</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
