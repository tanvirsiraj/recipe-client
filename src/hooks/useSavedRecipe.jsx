import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/AuthProvider";

const useSavedRecipe = () => {
  const [savedRecipe, setSavedRecipe] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["savedRecipesAll"],
    queryFn: () =>
      axiosSecure.get(`/savedRecipe?email=${user.email}`).then((res) => {
        return setSavedRecipe(res.data);
      }),
  });
  return [savedRecipe];
};

export default useSavedRecipe;
