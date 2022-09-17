import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import products from "./productsData"

const ItemDetailContainer = () => {

const [item, setItem] = useState({})
const {slug} = useParams()

  useEffect(() => {
   getItem().then( data => {
    if(data){
    setItem(data)
    }
   })
  }, [])
  

  const getItem = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve( products.find(p => p.slug == slug) )
      }, 2000);
    
    })

   }

  return (
   <ItemDetail item={item}/>
  )
}
export default ItemDetailContainer