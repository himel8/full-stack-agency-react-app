import Initialization from "../Pages/Login/Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

Initialization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //   google sign up
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    signInWithGoogle,
  };
};
export default useFirebase;
