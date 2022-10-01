import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Links from "./Links";

const ProductCard = ({image, title, price, stock}) => {
  return (
    <div>
        <img className="w-14" src={image} alt="imagen"/>
        <li>{title}</li>
        <li>{price}</li>
        <li>{stock}</li>
    </div>
  )
}

const ProductsContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        // getRyzen()
        getProducts()
    }, [])
    
// const getRyzen = () => {
//    const db = getFirestore();
//    const ryzenRef = doc(db, 'items', 'bGn4pbIzU9rtAdhIWz')
//    getDoc( ryzenRef ).then( res => {
//     const data = res.data()
//     console.log( data );
//     setProducts( data )
//    })
// }  

const  getProducts = () => { 
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    getDocs(itemCollection).then(snapshot => {
        setProducts(snapshot.docs.map(d => ({id: d.id, ...d.data()}) ) );
    })
 }

  return (
    // <ProductCard {...products}/> 
    <>
    <Links/>
    {products.map (p => <ProductCard key={p.id} {...p}/> ) }
    </>
  )
}
export default ProductsContainer