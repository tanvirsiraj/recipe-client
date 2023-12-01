import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SavedRecipeCard from "./SavedRecipeCard";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const SavedRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, isPending, error, data } = useQuery({
    queryKey: ["allSavedRecipes"],
    queryFn: () =>
      axiosSecure.get(`/savedRecipe?email=${user.email}`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    if (data) {
      setSavedRecipes(data);
    }
  }, [data]);

  if (isPending) {
    return (
      <div className="max-w-6xl mx-auto md:pt-40 flex justify-center  md:pb-60">
        <span className="loading  loading-spinner loading-lg text-primary-color dark:text-white md:pb-20"></span>
      </div>
    );
  }
  if (error)
    return (
      <p className="text-center my-4">An error has occurred: {error.message}</p>
    );

  const handleDeleteRecipe = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/savedRecipe/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Recipe has been deleted.",
                icon: "success",
              });
            }
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="dark:bg-black py-10">
      <h2 className="text-center  text-3xl md:text-5xl font-semibold dark:text-white pt-20">
        My Saved Recipes
      </h2>
      <div className="max-w-6xl mx-auto pt-10">
        <div className="mx-4 lg:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {savedRecipes.map((savedRecipe) => (
              <SavedRecipeCard
                key={savedRecipe._id}
                savedRecipe={savedRecipe}
                handleDeleteRecipe={handleDeleteRecipe}
              ></SavedRecipeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipe;
