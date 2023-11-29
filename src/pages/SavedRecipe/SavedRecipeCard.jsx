import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const SavedRecipeCard = ({ savedRecipe, handleDeleteRecipe }) => {
  const {
    _id,
    img,
    recipeName,
    ingredients,
    instructions,
    cookingTime,
    mealType,
  } = savedRecipe;

  return (
    <div className="card bg-white border rounded-lg shadow-lg relative">
      <figure>
        <img src={img} alt="recipeImg" />
      </figure>

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
        <p className="mb-4">
          <span className="font-semibold text-lg">Meal Type: </span>
          <span className="text-base text-black">{mealType}</span>
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Link
              onClick={() => handleDeleteRecipe(_id)}
              className="btn bg-red-600 text-white font-semibold text-lg hover:bg-black "
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SavedRecipeCard.propTypes = {
  handleDeleteRecipe: PropTypes.func,
  savedRecipe: PropTypes.object,
  img: PropTypes.string,
  recipeName: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  cookingTime: PropTypes.string,
  mealType: PropTypes.string,
};

export default SavedRecipeCard;
