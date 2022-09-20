import React from 'react'
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import partsJson from "../parts.json"
import { PartsList } from './PartsList';

export const PartsContainer = () => {
    const [parts, setParts] = useState([])
    const {cart, clearCart } = useCart()

      const getParts = (data, time) => 
      new Promise((resolve, reject)=>{
         setTimeout(()=>{
            if(data){
               resolve(data);
            }else{
               reject("Error");
            }
         }, time);
      });

      useEffect(()=>{
         getParts(partsJson, 3000) //simula la carga de la página
         .then((res)=>{
            setParts(res)
         }).catch((err)=>console.log(err, ": no hay Productos"));
   }, []);

 return( <div>
   <PartsList className='flex-row' parts={parts} />
   <strong>Carrito de compras</strong>{cart.map( (c, i) => <li key={i}>{c}</li>)}
   <button className='btn' onClick={clearCart}>Borrar Carrito</button>


 </div>
 );
};