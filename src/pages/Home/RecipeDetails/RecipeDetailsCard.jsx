import { PropTypes } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/AuthProvider";
import useSavedRecipe from "../../../hooks/useSavedRecipe";

const RecipeDetailsCard = ({ recipe }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [savedRecipe] = useSavedRecipe();

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

  useEffect(() => {
    const filterData = savedRecipe.find((sRecipe) => sRecipe.id === recipe._id);
    if (filterData) {
      setDisabled(true);
    }
  }, [savedRecipe, recipe._id]);

  const handleSavedRecipe = (id) => {
    console.log(id);
    const recipeData = {
      id,
      img,
      recipeName,
      ingredients,
      instructions,
      cookingTime,
      mealType,
      email: user.email,
    };
    console.log(recipe);

    // sending new book to server

    axiosSecure
      .post("/savedRecipe", recipeData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Recipe saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setDisabled(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-white border rounded-lg shadow-lg relative">
      <figure>
        <img src={img} alt="recipeImg" />
      </figure>
      {disabled ? (
        <p className="absolute top-4 border-none left-4 text-white text-lg font-semibold bg-[#000000ac] py-1 px-4 rounded">
          Saved
        </p>
      ) : (
        <Link
          onClick={() => handleSavedRecipe(_id)}
          className="btn bg-primary-color text-white font-semibold text-lg hover:bg-black absolute top-4 border-none left-4 rounded"
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
              to={`/updateRecipe/${_id}`}
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
  savedRecipes: PropTypes.array,
  img: PropTypes.string,
  recipeName: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  cookingTime: PropTypes.string,
  mealType: PropTypes.string,
};

export default RecipeDetailsCard;
