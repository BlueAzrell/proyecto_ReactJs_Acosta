import PokeCard from "./PokeCard"

const PokeCardList = ( {chars} ) => {
  return (
    <div>
        {chars.map( c => 
        <PokeCard key={c.id} {...c}/> 
        ) }
    </div>
  )
}
export default PokeCardList