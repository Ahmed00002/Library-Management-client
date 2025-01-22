import PropTypes from "prop-types";
import AuthContext from "../context/Context";

const AuthProvider = ({ children }) => {
  const authInfo = { name: "Numan" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};
