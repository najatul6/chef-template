import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import Loading from "../components/Shared/LoadingPage/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return <Loading/>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;