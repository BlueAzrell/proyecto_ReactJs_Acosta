import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import products from "./productsData"
import CartContext from "../../context/CartContext"

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(products)
    }, [])
    

  return (
<CartContext.Provider value={[]}>
    <div>
        {items.map( i=> 
        <Link to={`/shop/item/${i.slug}`} key={i.id}>
        <div className="m-5 p-5 bg-lime-300" >{i.title} {i.price} {i.img} {i.description} </div>

        </Link>
        ) }
    </div>
    </CartContext.Provider>
  )
}
export default ItemListContainer