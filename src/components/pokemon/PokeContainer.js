import { useEffect, useState } from "react"
import PokeCardList from "./PokeCardList"

const PokeContainer = () => {

    const [chars, setChars] = useState([])

useEffect(() => {
   const URL = 'https://pokeapi.co/api/v2/pokemon/'
 fetch( URL )
 .then( res => res.json() )
 .then( data => {
    console.log( data.results );
    setChars( data.results)
 })
}, [])

  return (
    <>
    <div>Pokemon Renegade Platinum</div>
    <PokeCardList chars={chars}/>
    </>
  )
}

export default PokeContainer