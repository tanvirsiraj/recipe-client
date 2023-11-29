import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeDetailsCard = ({ recipe }) => {
  const {
    _id,
    img,
    recipeName,
    ingredients,
    instructions,
    cookingTime,
    mealType,
  } = recipe;
  //   console.log(recipe);
  const [disabled, setDisabled] = useState(false);

  const handleSavedRecipe = (id) => {
    console.log(id);
    setDisabled(true);
  };

  return (
    <div className="card bg-white border rounded-lg shadow-lg relative">
      <figure>
        <img src={img} alt="recipeImg" />
      </figure>
      {disabled ? (
        <p className="absolute top-4 border-none left-4 text-white text-lg font-semibold">
          Saved
        </p>
      ) : (
        <Link
          onClick={() => handleSavedRecipe(_id)}
          className="btn bg-primary-color text-white font-semibold text-lg hover:bg-black absolute top-4 border-none left-4"
        >
          Save Recipe
        </Link>
      )}
      <div className="card-body  px-4">
        <h2 className="card-title text-black">{recipeName}</h2>
        <p>
          <span className="font-semibold text-lg">Ingredients: </span>
          <span className="text-base text-black">{ingredients}</span>
        </p>
        <p>
          <span className="font-semibold text-lg">Instructions: </span>
          <span className="text-base text-black">{instructions}</span>
        </p>
        <p>
          <span className="font-semibold text-lg">Cooking Time: </span>
          <span className="text-base text-black">{cookingTime} minutes</span>
        </p>
        <p>
          <span className="font-semibold text-lg">Meal Type: </span>
          <span className="text-base text-black">{mealType}</span>
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Link
              to={`/createRecipe/${_id}`}
              className="btn bg-primary-color text-white font-semibold text-lg hover:bg-black "
            >
              Update Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeDetailsCard.propTypes = {
  recipe: PropTypes.object,
  img: PropTypes.string,
  recipeName: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  cookingTime: PropTypes.string,
  mealType: PropTypes.string,
};

export default RecipeDetailsCard;
