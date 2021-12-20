import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { collection, addDoc, getFirestore } from 'firebase/firestore';
// import { products } from './components/ItemListContainer/Item/items';



const firebaseConfig = {
  apiKey: "AIzaSyAojv0SV2ATcmxVWLYNZiJRa2TG4hYKMsg",
  authDomain: "rdm81-4f8c7.firebaseapp.com",
  projectId: "rdm81-4f8c7",
  storageBucket: "rdm81-4f8c7.appspot.com",
  messagingSenderId: "804886039220",
  appId: "1:804886039220:web:2160fa24311edc5f1ca5e1",
  measurementId: "G-B4B65HYX7G"
};


initializeApp(firebaseConfig);

// const db = getFirestore();
// const ref = collection (db, "products");
// products.map(product => addDoc(ref, product));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
