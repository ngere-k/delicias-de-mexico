import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk4CJgSD_SDjrA2hGvqIUWMEFHqk3BBC0",
  authDomain: "restaurant-ae609.firebaseapp.com",
  projectId: "restaurant-ae609",
  storageBucket: "restaurant-ae609.appspot.com",
  messagingSenderId: "532783874010",
  appId: "1:532783874010:web:b26a3d341bfb708bc2cae3",
};

// init app
initializeApp(firebaseConfig);

// init services
const reviewsDB = getFirestore();
const auth = getAuth();

export { reviewsDB, auth };
