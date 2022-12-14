import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../../context/CartContext';
import db from '.././helpers/firebaseHelpers'
import { collection, addDoc, updateDoc, doc} from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment/moment';
import Spinner from '../Spinner';




function BasicExample() { 

    const {finalPrice, cart} = useContext(GlobalContext)

    const MySwal = withReactContent(Swal)

    const [loading, setLoading] = useState(false)

    const [ formulario, setFormulario] = useState({
        buyer:{
            nombre:"",
            apellido:"",
            email:"",
            telefono:"",
        },
        total:{finalPrice},
        compra: {cart},
        fecha: moment().format("DD MM YYYY hh:mm:ss")
    })

    const { buyer: {email, nombre, apellido,telefono},} = formulario

    const handleChange = (e)=>{
        const { name, value } = e.target
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
        })
    }

    const updateFirebase = async (formulario)=>{
        updateStock(cart)
        setInFirebase(formulario) 
    }



    const updateStock = (cart)=>{
        setLoading(true)
        let idProduct = cart.forEach(e=>{
            const {id, stock, quantity} = e
            let newStock = stock - quantity
            const producto = doc(db,"productos", id)
            updateDoc(producto,{stock: newStock})
        })

    }

    const setInFirebase =  async (formulario)=>{
        if(nombre === "" || apellido === "" || email === "" || telefono === "" ){
            setLoading(false)
            MySwal.fire({
                title: <strong>Error!</strong>,
                html: <i>Te faltan completar los datos</i>,
                icon: 'error'})
        }else{

            try {
                setLoading(true)
                const col = collection(db, "ordenes")
                await addDoc(col, formulario).then(({id})=>{
                MySwal.fire({
                    title: <strong>Excelente</strong>,
                    html:(
                        <div>
                            <h3>Su ID de compra es: {id}</h3>
                        </div>
                    ),
                    icon: 'success'
                  }).then(localStorage.removeItem("cart")).then(function(){
                    window.location.href= "/"
                  })
            })

            } catch (error) {
                console.log(error)
            }
        }

    }

    return (
    <>{
        loading === true ? (<Spinner/>):(<Form className="container-fluid  p-5 row d-flex justify-content-center mx-auto ">
        <h2>Datos de Compra</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control onChange={handleChange} value={nombre} name="nombre" type="text" placeholder="Nombre" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control onChange={handleChange} value={apellido} name="apellido" type="text" placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} value={email} name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tel??fono</Form.Label>
            <Form.Control onChange={handleChange} value={telefono} name="telefono" type="number" placeholder="Tel??fono" required/>
        </Form.Group>
        <Form.Text className="fs-2">
          Precio: ${finalPrice}
        </Form.Text>
        <Button onClick={()=>updateFirebase(formulario)} className="button btn" type='button'>Terminar Compra</Button>
    </Form>)
    }
</>

  );
}

export default BasicExample;