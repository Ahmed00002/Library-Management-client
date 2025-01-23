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

const AuthProvider = ({ children }) => {
  // user data
  const [user, setUser] = useState(null);

  // email pass signup
  const signUpEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email pass signin
  const signinEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logout = () => {
    return signOut(auth);
  };

  // google signin
  const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    signupWithGoogle,
    signUpEmailPass,
    signinEmailPass,
    logout,
    user,
  };

  //get current signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
  children: PropTypes.object,
};
