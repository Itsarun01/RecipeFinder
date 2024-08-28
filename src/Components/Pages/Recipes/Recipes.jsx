import SearchBar from "../../Common/SearchBar/SearchBar";
import RecipeLists from "./RecipeLists";
import "./Recipes.css";
import {useState} from "react";
import {getResults} from "../../Common/Services/Api";

const Recipes = () => {
  const recipesResults = async () => {
    const [searchQuery, setSearchQuery] = useState("");
    await getResults(searchQuery);
    
  };
  return (
    <>
      <div>
        <SearchBar setSearchQuery={searchQuery} />
        <RecipeLists />
      </div>
    </>
  );
};

export default Recipes;
