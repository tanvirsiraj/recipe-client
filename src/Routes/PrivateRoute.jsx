import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto pt-40 pb-36 flex justify-center">
        <span className="loading  loading-spinner loading-lg  text-primary-color dark:text-white"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
