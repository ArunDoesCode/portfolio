// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCqFxfa5i5lxPU_oIJ3YuYwL65_MVveLXA",
	authDomain: "portfolio-arun8.firebaseapp.com",
	projectId: "portfolio-arun8",
	storageBucket: "portfolio-arun8.appspot.com",
	messagingSenderId: "281912408515",
	appId: "1:281912408515:web:4d058645ed5e690572e576",
	measurementId: "G-2HBJQR9E67",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
