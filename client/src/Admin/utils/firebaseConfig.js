import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC3_oqEFXK4RBF-PncyqlLEUy7vfYuFKdg",
  authDomain: "mernstack-web.firebaseapp.com",
  projectId: "mernstack-web",
  storageBucket: "mernstack-web.appspot.com",
  messagingSenderId: "678009549329",
  appId: "1:678009549329:web:6be1c7d1242ece0c6737b0",
  measurementId: "G-6Y60Q9PNK9"
};


const app = initializeApp(firebaseConfig);
 export const storage  = getStorage(app)