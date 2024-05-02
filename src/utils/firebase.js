import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMUtJFGNFMNVwxG2G_bIJTplJrhrk-GJ4",
  authDomain: "neflix-gpt-22744.firebaseapp.com",
  projectId: "neflix-gpt-22744",
  storageBucket: "neflix-gpt-22744.appspot.com",
  messagingSenderId: "186797055405",
  appId: "1:186797055405:web:e49b6048844ebef32a9524"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();