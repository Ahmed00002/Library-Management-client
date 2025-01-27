import PropTypes from "prop-types";
import AuthContext from "../context/Context";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase_init";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {
  // user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // email pass signup
  const signUpEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email pass signin
  const signinEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google signin
  const signupWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // provider data
  const authInfo = {
    signupWithGoogle,
    signUpEmailPass,
    signinEmailPass,
    logout,
    user,
    loading,
    setLoading,
  };

  //get current signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);

        axios
          .post(
            "http://localhost:5000/jwt",
            {
              email: user.email,
            },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
      } else {
        setUser(null);
        setLoading(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
