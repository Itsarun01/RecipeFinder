import "./SearchBar.css";
const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <h1 className="head-text">Search Your Recipe</h1>
        <div className="search-inputs">
          <input className="search-box" type="text" />
          <button className="btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
