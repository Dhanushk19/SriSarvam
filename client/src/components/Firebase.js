
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBQN5wJdMU_AA5NLfBfVm--fyHwnffVn-g",
  authDomain: "srisarvam-9435d.firebaseapp.com",
  projectId: "srisarvam-9435d",
  storageBucket: "srisarvam-9435d.appspot.com",
  messagingSenderId: "345927404161",
  appId: "1:345927404161:web:36242ee528d6c431dc5b80"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);

export default firebaseApp;