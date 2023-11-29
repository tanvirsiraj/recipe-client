import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import SignIn from "../pages/Shared/SignIn/SignIn";
import SignUp from "../pages/Shared/SignUp/SignUp";
import SavedRecipe from "../pages/SavedRecipe/SavedRecipe";
import PrivateRoute from "./PrivateRoute";
import UpdateRecipe from "../pages/Home/UpdateRecipe/UpdateRecipe";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createRecipe",
        element: (
          <PrivateRoute>
            <CreateRecipe></CreateRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/savedRecipes",
        element: (
          <PrivateRoute>
            <SavedRecipe></SavedRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/updateRecipe/:id",
        element: (
          <PrivateRoute>
            <UpdateRecipe></UpdateRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://recipe-server-gray.vercel.app/createRecipe/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
