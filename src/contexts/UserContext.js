import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  //   const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); //to set user available in private route after reload
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleSignin = () => {
    setLoading(true);
    // navigate("/");
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get the data of signed user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); //set currently logged in user
      setLoading(false); //after getting user in private route it will help to keep the user logged in
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singinUser,
    logOut,
    handleGoogleSignin,
    loading,
    handleGithubSignin,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
