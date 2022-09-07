import './app.css'
import App from './App.svelte'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRVmWRrOKb8iFaBnvVwdg6cUoU_DEUbWI",
  authDomain: "akanni-marketing.firebaseapp.com",
  projectId: "akanni-marketing",
  storageBucket: "akanni-marketing.appspot.com",
  messagingSenderId: "824891637147",
  appId: "1:824891637147:web:c806014b07ad5c6259b53e",
  measurementId: "G-MESLK43KKL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


const app = new App({
  target: document.getElementById('app')
})

export default app
