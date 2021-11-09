import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const initAuth = () => {
  return initializeApp(firebaseConfig);
};

export default initAuth;
