import "./RecipesDetails.css";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getRecipe} from "../../Services/Api";
import {Link} from "react-router-dom";

const RecipesDetails = () => {
  const [recipe, setRecipe] = useState({});

  const {recipeId} = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);

  return Object.keys(recipe).length > 0 ? (
    <div className="container">
      <Link className="back-btn" to={"/recipes"}>
        Back
      </Link>
      <div className="recipe-card">
        <div className="recipe-img">
          <img className="recipe-img" src={recipe.image_url} alt="Thumbnail" />
        </div>
        <div className="recipe-content">
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-publisher-name">
            <span>Publisher</span> : {recipe.publisher}
          </p>
          <p className="recipe-publisher-url">
            <span>Source</span> :{" "}
            <a href={recipe.publisher_url} target="_blank">
              {recipe.publisher_url}
            </a>
          </p>
          <p className="recipe-social-rank">
            <span>Social Rank</span> : {recipe.social_rank}
          </p>
          <p className="recipe-source-url">
            <span>Recipe Source</span> :{" "}
            <a href={recipe.source_url} target="_blank">
              {recipe.source_url}
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default RecipesDetails;
