import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://library-management-server-iota.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logout().then(() => navigate("/auth/login"));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
