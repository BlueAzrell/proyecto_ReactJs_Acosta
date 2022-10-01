import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import products from "./productsData"
import CartContext from "../../context/CartContext"
import Spinner from "../Spinner"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setItems(products)
        setLoading(false)
      }, 2500);
        
    }, [])
    

  return (
<CartContext.Provider value={[]}>
    <div>
      {
      loading ?
     <Spinner/> :
    
        (items.map( i=> 
        <Link to={`/shop/item/${i.slug}`} key={i.id}>
        <div className="m-5 p-5 bg-lime-300" >{i.title} {i.price} {i.img} {i.description} </div>
        </Link>
        ) )
        }
    </div>
    </CartContext.Provider>
  )
}
export default ItemListContainer