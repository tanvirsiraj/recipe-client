import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import SignIn from "../pages/Shared/SignIn/SignIn";
import SignUp from "../pages/Shared/SignUp/SignUp";
import SavedRecipe from "../pages/SavedRecipe/SavedRecipe";
import PrivateRoute from "./PrivateRoute";
import UpdateRecipe from "../pages/Home/UpdateRecipe/UpdateRecipe";

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
          fetch(`http://localhost:5000/createRecipe/${params.id}`),
      },
    ],
  },
]);

export default router;
