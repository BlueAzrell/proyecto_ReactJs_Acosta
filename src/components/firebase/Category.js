import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductsByCategory } from "../helpers/firebaseHelpers"

const Category = () => {

    const { id:categoryId } = useParams()

    const [products, setProducts] = useState([])

    useEffect( () => {
        const getProducts = async () => {
            setProducts(await getProductsByCategory(categoryId))
        }
        getProducts()
    }, [])


 

  return (
      <>
      <div>Category: {categoryId}</div>
      { products.map(  p => <div key={p.id}>{p.title}</div>) }
      </>
  )
}
export default Category