import React from "react";
import { Link } from "react-router-dom";
import {Parts} from "./Parts"

export const PartsList = ({parts}) => {
  <progress className="progress w-56"></progress>
  return (
    <section>
      {parts.length ? ( //ternario
        parts.map( (parts) => 
        <Link to={`/parts/${parts.id}`}>
        <Parts key={parts.id} {...parts} />
        </Link>)
        ): (
        <progress class="progress w-56 my-5 "></progress>
      )}
    </section>
  );
};