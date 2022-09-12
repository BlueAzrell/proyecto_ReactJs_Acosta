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
//import ReactStrictMode from 'react'

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
  </Routes>
 <Footer/>
 </BrowserRouter>
 //</ReactStrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
