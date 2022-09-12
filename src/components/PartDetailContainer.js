import {useParams} from "react-router-dom"
import {Parts, parts} from "./Parts"
import React from 'react'
import { useEffect } from "react"
import { setParts } from "./PartsContainer"
import partsJson from "../parts.json"


const PartDetailContainer = () => {
    const { id } = useParams()
    console.log('param id:' + id)

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

    useEffect(() => {
      getParts(partsJson) //simula la carga de la página
      .then((res)=>{
         setParts(res);
        
      })
    }, [])
    
    
  return (
    parts.map( (parts) => <Parts key={parts.id} {...parts} />)
  )
}
export default PartDetailContainer