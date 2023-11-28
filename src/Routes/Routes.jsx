import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import SignIn from "../pages/Shared/SignIn/SignIn";
import SignUp from "../pages/Shared/SignUp/SignUp";
import SavedRecipe from "../pages/SavedRecipe/SavedRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createRecipe",
        element: <CreateRecipe></CreateRecipe>,
      },
      {
        path: "/savedRecipes",
        element: <SavedRecipe></SavedRecipe>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/singup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
