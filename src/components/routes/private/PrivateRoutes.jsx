import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import PropTypes from "prop-types";
import Loading from "../../shared/loader/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.object,
};
