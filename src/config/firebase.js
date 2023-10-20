import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5cSN2Vph0GVTLP_ZtyyZzVixvem0HJ7k",
    authDomain: "greenkitchen-bd.firebaseapp.com",
    projectId: "greenkitchen-bd",
    storageBucket: "greenkitchen-bd.appspot.com",
    messagingSenderId: "747256413821",
    appId: "1:747256413821:web:9cdc028de4485bc1cebb14"

};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;