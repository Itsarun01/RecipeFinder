import "./Search.css";
import {useState} from "react";

const Search = ({setSearchQuery}) => {
  const [value, setValue] = useState("");

  const formsubmit = (e) => {
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
          <form onSubmit={formsubmit}>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="search-box"
              type="text"
              placeholder="Enter Recipe Name"
            />
            <button className="btn">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
