import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import PropTypes from "prop-types";
import Loading from "../../shared/loader/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (user) {
    return children;
  }
  if (loading) {
    return <Loading />;
  }

  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
