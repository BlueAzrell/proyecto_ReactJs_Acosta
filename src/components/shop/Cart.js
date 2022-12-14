import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import {motion} from "framer-motion"
import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import FormCart from '../FormCart/FormCart'


const Cart = () => {

  const {cart, clear, finalPrice} = useContext(CartContext)
  

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: "easeInOut"
    }}>
      <Container className="cart">
        {
          cart.length > 0 ? 
          (<>
          
          <h2 className="text-cart pt-5">Tu cart</h2>
          <div className='container-fluid'>
            {cart.map((item,index)=><CartItems key={index} pictureUrl={item.pictureUrl} price={item.price} item={item} quantity={item.quantity} id={item.id} title={item.title}/>)}
          </div>
          <div className='d-flex justify-content-between my-5 container-fluid'>
          <Link to="/productos">
             <button className='btn button btn-clear font-responsive '>Regresa al listado</button>
          </Link>
          <button className='btn btn-clear font-responsive' onClick={clear}>Eliminar todos los items</button>
            <div className=" align-items-center  d-flex">
              <h2 className="font-responsive">Precio Final: ${finalPrice}</h2>
            </div>
          </div>
          <div className='container-fluid d-flex  col-md-8 col-sm-12 col-12'>
            <FormCart/>
          </div>
          </> 
          ) : 
          (<>
            <h1>No tienes items en el carrito</h1>
            <Link className=' d-flex align-items-center justify-content-center pt-5' to={"/productos"}>
              <motion.button  whileHover={{ scale: 1.2 }} 
                              whileTap={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 100, damping: 50 }}
                              onHoverStart={e => {}}
                              onHoverEnd={e => {}} className='button btn d-flex fs-2 p-3'>
                                Regresa al listado
              </motion.button>
            </Link>
           </>)
        }
      </Container>
    </motion.div>
  )
}

export default Cart