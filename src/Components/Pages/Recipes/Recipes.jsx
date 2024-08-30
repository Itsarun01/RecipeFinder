import {useState, useEffect} from "react";
import "./Recipes.css";
import SearchBar from "../../Common/Search/Search";
import RecipeLists from "./RecipeLists";
import {getRecipe} from "../../Services/Api";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("pizza");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  const getSearchResult = async () => {
    let result = await getRecipe(searchQuery);

    if (result && result.recipes) {
      setRecipes(result.Recipes);
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
