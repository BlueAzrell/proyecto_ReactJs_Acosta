import React from "react";
import {Parts} from "./Parts"

export const PartsList = ({parts}) => {
  <progress className="progress w-56"></progress>
  return (
    <section>
      {parts.length ? ( //ternario
        parts.map( (parts) => <Parts key={parts.id} {...parts} />) //el uso de {...parts} trae todos los elementos del array del json para que Parts.js los use al antojo por medio de su const Parts
        ): (
        <progress class="progress w-56 my-5"></progress>
      )}
    </section>
  );
};