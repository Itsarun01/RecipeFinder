import SearchBar from "../../Common/SearchBar/SearchBar";
import RecipeLists from "./RecipeLists";
import "./Recipes.css";
const Recipes = () => {
  return (
    <>
      <div>
        <SearchBar />
        <RecipeLists />
      </div>
    </>
  );
  
};

export default Recipes;
