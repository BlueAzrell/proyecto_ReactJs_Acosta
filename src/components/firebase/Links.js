import { useEffect } from "react"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"


const Links = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
     getCategories()
    }, [])

    const getCategories = () => { 
     const db = getFirestore()
     const categoryCollection = collection(db, 'categories')
     getDocs(categoryCollection).then(snapshot => {
      setCategories(snapshot.docs.map(d => ({id: d.id, ...d.data()}) ) );
    })
}

  return (
    <div>
        { categories.map( c => 
        <Link key={c.id} className='mr-2' to ={`/products/category/${c.id}`}>{c.id}</Link> ) }
    </div>
  )
}
export default Links