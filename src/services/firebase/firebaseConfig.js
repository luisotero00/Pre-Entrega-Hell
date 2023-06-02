import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA_xxVymqxGCPZDm2EpiS0DhfEzntj5oyg",
    authDomain: "hellshoes-4bd3e.firebaseapp.com",
    projectId: "hellshoes-4bd3e",
    storageBucket: "hellshoes-4bd3e.appspot.com",
    messagingSenderId: "759239613110",
    appId: "1:759239613110:web:c6916ac5cbe638c511e417",
    measurementId: "G-HFL9HCE9LS"
  }

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)