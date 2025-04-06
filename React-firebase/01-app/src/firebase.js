import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCMGoOHj0Xt2q6YSMLD34CVhLWQoLXZXqQ",
    authDomain: "bookstore-app-41dba.firebaseapp.com",
    projectId: "bookstore-app-41dba",
    storageBucket: "bookstore-app-41dba.firebasestorage.app",
    messagingSenderId: "1086481659913",
    appId: "1:1086481659913:web:16658804631e9c17b7e0d8",
    databaseURL: "https://bookstore-app-41dba-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);