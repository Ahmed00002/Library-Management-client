import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import PropTypes from "prop-types";
import Loading from "../../shared/loader/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return <Loading />;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
