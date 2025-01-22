import { useContext } from "react";
import AuthContext from "../context/Context";

const useAuthContext = () => {
  const userContext = useContext(AuthContext);
  return userContext;
};

export default useAuthContext;
