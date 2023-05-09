
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const Firebase = {
  apiKey: "AIzaSyBQN5wJdMU_AA5NLfBfVm--fyHwnffVn-g",
  authDomain: "srisarvam-9435d.firebaseapp.com",
  projectId: "srisarvam-9435d",
  storageBucket: "srisarvam-9435d.appspot.com",
  messagingSenderId: "345927404161",
  appId: "1:345927404161:web:36242ee528d6c431dc5b80"
};

const app = initializeApp(Firebase);
export const auth = getAuth(app);
export default app;