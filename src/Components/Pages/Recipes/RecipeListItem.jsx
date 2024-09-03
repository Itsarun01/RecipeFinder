import {Link} from "react-router-dom";
import "./RecipeListItem.css";
const RecipeListItme = ({recipe}) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={recipe.image_url} alt="Thumbnail" />
        <div className="card-body">
          <h2 className="card-title "> {recipe.title}</h2>
          <p className="card-publisher-name">
            <span>Publisher</span> :
            <span href={recipe.publisher_url}> {recipe.publisher}</span>
          </p>
          <div className="card-btns">
            <button className="card-btn">
              <Link to={`/recipes/${recipe.recipe_id}`} target="_blank">
                View
              </Link>
            </button>
            <button className="card-btn">
              <Link
                to={recipe.source_url}
                className="card-link"
                target="_blank"
              >
                Recipe Source
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeListItme;
