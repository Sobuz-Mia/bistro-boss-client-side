import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.confiq";
import useAxiosPublic from "../hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loggedIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loggedInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loggedOut = () => {
    return signOut(auth);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axiosPublic.post("/jwt/token",{email:currentUser.email}).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);
  const authInfo = {
    user,
    loading,
    createUser,
    loggedIn,
    loggedOut,
    updateUser,
    loggedInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
