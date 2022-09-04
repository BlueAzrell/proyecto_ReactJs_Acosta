const PokeCard = ({id, name, species, sprites}) => {
  return (
    <div>
        <h1>{id} - {name}</h1>
        <h3>{species}</h3>
        <h3>{sprites}</h3>
    </div>
  )
}
export default PokeCard