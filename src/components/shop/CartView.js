import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const CartView = () => {

    const order = {
        buyer: {name:'Aquiles', phone: 1123901220, email: 'aquilesmaxi@gmail.com'},
        items: [{id:1 , title:'procesador', price: 29000 }, {name: 'ram', price: 10200} ],
        total: 39200
    }

    const orderHandler = () => { 
        console.log('Terminando orden');

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order).then(({id}) => {
            console.log({id});
        })
     }

     const getOrderHandler = () => {
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      getDocs(orderCollection).then(res => {
        console.log(
            res.docs.map(d => ({id: d.id, ...d.data()}) )
            
        );
      })
    }

    const updateHandler = () => { 
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const orderDoc = doc(orderCollection,  'I1gRk0ZZ52UMyj8BPCji')
    updateDoc(orderDoc, {
        price: 999999,
        buyer: {name:'Daniel', phone: 1154687685, email: 'azarielazul@gmail.com'},
    }).then( res =>{ console.log('res: ' + res)})
}

  return (
    <div>
        <button className="btn" onClick={orderHandler}>Finalizar Compra</button>
        <button className="btn" onClick={updateHandler}>Actualizar Orden</button>
        <div className="m-5">
        <button className="btn" onClick={getOrderHandler}>Ver Órdenes</button>
        </div>
       
    </div>
  )
}
export default CartView