import "./RecipeLists.css";

const RecipeLists = ({recipes, searchQuery}) => {
  return (
    <>
      <div className="container">
        <h1>Searched Result : {searchQuery}</h1>
        {recipes.map((recipe) => {
          return hello;
        })}
      </div>
    </>
  );
};

export default RecipeLists;
