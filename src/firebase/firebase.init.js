import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenTication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthenTication;