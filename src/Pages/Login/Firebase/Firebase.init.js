import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const Initialization = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};
export default Initialization;
