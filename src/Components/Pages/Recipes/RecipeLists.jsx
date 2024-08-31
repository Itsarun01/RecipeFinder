import "./RecipeLists.css";
import RecipeListItem from "./RecipeListItem";

const RecipeLists = ({recipes, searchQuery}) => {
  return (
    <>
      <div className="container">
        <h1 className="head-search-text">
          Searched Result :
          <span className="search-word">
            {""} {searchQuery}
          </span>
        </h1>
        <div className="cards">
          {recipes &&
            recipes.map((recipe) => {
              return <RecipeListItem recipe={recipe} />;
            })}
        </div>
      </div>
    </>
  );
};

export default RecipeLists;
