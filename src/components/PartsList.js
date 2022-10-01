import React from "react";
import { Link } from "react-router-dom";
import {Parts} from "./Parts"
import { useCart } from "../context/CartContext";

export const PartsList = ({parts}) => {
  <progress className="progress w-56"></progress>

 const {addToCart} = useCart(parts)

 const addHandler = ( parts ) => {
  addToCart( parts )
 }

  return (
    <section>
      {parts.length ? ( //ternario
        parts.map( (parts) => 
        <>
        <Link to={`/parts/${parts.id}`}>
        <Parts key={parts.id} {...parts} />
        </Link>
        <button onClick={()=>{addHandler(...parts)}} className="btn">Agregar al cart</button>
        </>)
        ): (  
        <progress class="progress w-56 my-5 "></progress>
   
      )}
  
    </section>
  );
};