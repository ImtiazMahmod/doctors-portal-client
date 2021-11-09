import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";
import initAuth from "../Pages/Login/Firebase/firebase.init";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const [admin, setAdmin] = useState(false);

  const provider = new GoogleAuthProvider();

  ///register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        ///set user name to state to show on header
        const newUser = { email, displayName: name };
        setUser(newUser);
        history.replace("/");
        ///save user to database

        saveUser(email, name, "POST");
        ////update user name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
            setAuthError(error.message);
          });
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  console.log(user);
  const userLogin = (email, password, location, history) => {
    setIsLoading(true);
    const destination = location?.state?.from?.pathname;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.replace(destination);
        console.log("destination", destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //user state observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then((idToken) => {
            localStorage.setItem("idToken", idToken);
          })
          .catch((error) => {});
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
      return () => unsubscribed;
    });
  }, []);

  ///login with google
  const googleSignIn = (location, history) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from?.pathname || "/";
        history.replace(destination);
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  //admin check
  useEffect(() => {
    fetch(
      `https://serene-citadel-59200.herokuapp.com/users/admin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  ///logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  ///save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://serene-citadel-59200.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    userLogin,
    googleSignIn,
    logout,
  };
};

export default useFirebase;
