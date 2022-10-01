import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './components/Hero';
import { PartsContainer } from './components/PartsContainer';
import DaisyNavBar from './components/DaisyNavBar';
import Footer from './components/Footer';
import PartDetailContainer from './components/PartDetailContainer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import ProductsContainer from './components/firebase/ProductsContainer';
//import ReactStrictMode from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Category from './components/firebase/Category';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<ReactStrictMode>
  <BrowserRouter>
  <DaisyNavBar/>
  <Routes>
   <Route path='/' element={<App/>}/>
   <Route path='/hero' element={<Hero/>}/>
   <Route path='/parts' element={<PartsContainer/>}/>
   <Route path='/parts/:id' element={<PartDetailContainer/>}/>
   <Route path='/shop' element={<ItemListContainer/>}/>
   <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/>
   <Route path='/products' element={<ProductsContainer/>}/>
   <Route path='/products/category/:id' element={<Category/>}/>
  </Routes>
 <Footer/>
 </BrowserRouter>
 //</ReactStrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
