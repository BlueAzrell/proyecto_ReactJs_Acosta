import React from "react"
import { useState, useEffect } from 'react';
import {GiSpinningSword} from "react-icons/gi"

export const Parts = ({title, img, price}) => {
  const [counter, setCounter] = useState(0) //contador: empieza en cero, reacciona con los botones
  const [styleSelected, setStyleSelected] = useState(false);
  const [selected, setSelected] = useState(false);

  function selectedParts(){ //marcador de seleccionar Componentes
    setStyleSelected(styleSelected ? false : true);
    setSelected(selected ? false : true);
  }

  useEffect(() => {
    console.log('Efecto al montaje y cambio en Counter');
  }, [counter])
  
  useEffect(() => {
    console.log('Efecto en cada render');
  })
  
  
  
  const handleClick = () => { //botón para agregar +1 al contador
     console.log('Hiciste click');
     setCounter(counter + 1)
   }
  
   const restaClick = () => { //botón para restar -1 al contador
     console.log('Hiciste un resta click');
     setCounter(counter - 1)
   }

  return (
    <article>
   <h3>{title}</h3>
   <h4 style={{color: styleSelected ? "green" : "orange", cursor: "pointer"}} //cambio del cursor a modo pointer al pasar por por el marcador
   onClick={selectedParts}
   >
    Marcar este Componente
   </h4>

   <h4 style={{opacity: selected ? 1 : 0}}>
    Componente Marcado!<GiSpinningSword/> 
   </h4> 
   <h3>${price}</h3>

   <img src= {img} alt="" style={{width: "15rem"}} />
   <div className='my-5'>
 <strong>Cantidad: {counter}</strong>
 </div>
 <button onClick={handleClick} className='btn'>Click acá</button>
 <button onClick={restaClick} className='btn'>Resta acá</button>
   </article>
  )
}
export default Parts