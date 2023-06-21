import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvl_KSybw37e_jh4PER3hw6E5Y4g--Ucw",
  authDomain: "chat-app-12b51.firebaseapp.com",
  databaseURL: "https://chat-app-12b51-default-rtdb.firebaseio.com",
  projectId: "chat-app-12b51",
  storageBucket: "chat-app-12b51.appspot.com",
  messagingSenderId: "271691511399",
  appId: "1:271691511399:web:04ef09b6f25e50e2f206c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
