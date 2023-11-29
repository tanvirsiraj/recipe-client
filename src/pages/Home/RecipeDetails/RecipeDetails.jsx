import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import RecipeDetailsCard from "./RecipeDetailsCard";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);

  const axiosSecure = useAxiosSecure();

  const { isPending, error, data } = useQuery({
    queryKey: ["createdRecipes"],
    queryFn: () =>
      axiosSecure.get("/createRecipe").then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data, recipes]);

  if (isPending) {
    return (
      <div className="max-w-6xl mx-auto md:py-40 flex justify-center ">
        <span className="loading  loading-spinner loading-lg text-primary-color dark:text-white"></span>
      </div>
    );
  }
  if (error)
    return (
      <p className="text-center my-4">An error has occurred: {error.message}</p>
    );
  //   console.log(recipes);

  return (
    <div className="dark:bg-black py-10">
      <h2 className="text-center  text-3xl md:text-5xl font-semibold dark:text-white">
        Our Recipe
      </h2>
      <div className="max-w-6xl mx-auto pt-10">
        <div className="mx-4 lg:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {recipes.map((recipe) => (
              <RecipeDetailsCard
                key={recipe._id}
                recipe={recipe}
              ></RecipeDetailsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
