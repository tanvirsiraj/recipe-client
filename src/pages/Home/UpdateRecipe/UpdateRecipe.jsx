import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateRecipe = () => {
  const axiosSecure = useAxiosSecure();
  const loaderData = useLoaderData();
  console.log(loaderData);

  const {
    _id,
    img,
    recipeName,
    ingredients,
    instructions,
    cookingTime,
    mealType,
  } = loaderData;

  const [selectedOption, setSelectedOption] = useState(mealType);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const recipeName = form.recipeName.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const cookingTime = form.cookingTime.value;

    const updatedRecipe = {
      img,
      recipeName,
      ingredients,
      instructions,
      cookingTime,
      mealType: selectedOption,
    };
    console.log(updatedRecipe);

    // updating recipe
    axiosSecure
      .put(`createRecipe/${_id}`, updatedRecipe)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Recipe Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero relative dark:bg-black ">
        <div className="overlay m-0 p-0"></div>
        <div className="bg-img-sign-log"></div>
        <div className="py-32 z-10 ">
          <div className="w-[320px] md:w-[768px] lg:w-[1152px] text-center ">
            <form
              onSubmit={handleUpdateRecipe}
              className="card-body bg-[#ffffff7b] dark:bg-[#0000006d] shadow-lg border-2 border-primary-color dark:border-black rounded mx-2 lg:mx-0  px-2 md:px-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold">
                      Image
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={img}
                    name="img"
                    placeholder="image url..."
                    className="bg-transparent border-b border-[#5958584b] dark:border-white p-2 outline-none text-black placeholder:text-black dark:placeholder:text-white dark:text-white"
                    required
                  />
                </div>
                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={recipeName}
                    name="recipeName"
                    placeholder="recipe name..."
                    className="bg-transparent border-b border-[#5958584b] dark:border-white p-2 outline-none text-black placeholder:text-black dark:placeholder:text-white dark:text-white"
                    required
                  />
                </div>
                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold ">
                      Ingredients
                    </span>
                  </label>

                  <textarea
                    placeholder="ingredients..."
                    defaultValue={ingredients}
                    name="ingredients"
                    className="textarea  textarea-lg h-full w-full bg-[#ffffff56] placeholder:text-black dark:placeholder:text-white dark:bg-[#0000004d] text-black  dark:text-white text-sm "
                    required
                  ></textarea>
                </div>
                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold">
                      Instructions
                    </span>
                  </label>

                  <textarea
                    placeholder="instructions..."
                    defaultValue={instructions}
                    name="instructions"
                    className="textarea  textarea-lg w-full h-full bg-[#ffffff56] placeholder:text-black dark:placeholder:text-white dark:bg-[#0000004d] dark:text-white text-sm"
                    required
                  ></textarea>
                </div>

                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold">
                      Cooking Time
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cookingTime"
                    defaultValue={cookingTime}
                    placeholder="cooking time (minutes)..."
                    className="bg-transparent border-b border-[#5958584b] dark:border-white p-2 outline-none text-black placeholder:text-black dark:placeholder:text-white dark:text-white"
                    required
                    min={1}
                  />
                </div>
                <div className="form-control overflow-hidden">
                  <label className="label">
                    <span className="label-text text-black dark:text-white text-base md:text-lg font-semibold">
                      Meal Type
                    </span>
                  </label>
                  <select
                    value={selectedOption}
                    className="bg-transparent border-b border-[#5958584b] dark:border-white p-2 outline-none text-black placeholder:text-black dark:placeholder:text-white dark:text-white"
                    onChange={handleOptionChange}
                  >
                    <option className="dark:text-black">Breakfast</option>
                    <option className="dark:text-black">Lunch</option>
                    <option className="dark:text-black">Dinner</option>
                    <option className="dark:text-black">Snack</option>
                    <option className="dark:text-black">Appetizer</option>
                    <option className="dark:text-black">Soup</option>
                    <option className="dark:text-black">Dessert</option>
                    <option className="dark:text-black">Side Dish</option>
                    <option className="dark:text-black">Sushi</option>
                    <option className="dark:text-black">Brunch</option>
                  </select>
                </div>
              </div>

              <div className="form-control mt-10 mx-auto ">
                <button
                  type="submit"
                  className="btn  bg-primary-color border-none duration-300 text-white  hover:bg-black  hover:text-white text-lg md:text-xl capitalize font-semibold add-btn dark:bg-white dark:text-black"
                >
                  Update Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipe;
