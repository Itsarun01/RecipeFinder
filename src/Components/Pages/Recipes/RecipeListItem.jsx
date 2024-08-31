import "./RecipeListItem.css";
const RecipeListItme = ({recipe}) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={recipe.image_url} alt="Thumbnail" />
        <div className="card-body">
          <h2 className="card-title "> {recipe.title}</h2>
          <p className="card-publisher-name"> {recipe.publisher}</p>
          <a
            href={recipe.source_url}
            target="_blank"
            rel="noreferrer"
            className="card-link"
          ></a>
        </div>
      </div>
    </>
  );
};

export default RecipeListItme;
