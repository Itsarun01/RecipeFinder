import {useState, useEffect} from "react";
import "./Recipes.css";
import SearchBar from "../../Common/Search/Search";
import RecipeLists from "./RecipeLists";
import {getRecipes} from "../../Services/Api";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  const getSearchResult = async () => {
    let result = await getRecipes(searchQuery);

    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <RecipeLists recipes={recipes} searchQuery={searchQuery} />
    </>
  );
};

export default Recipes;
