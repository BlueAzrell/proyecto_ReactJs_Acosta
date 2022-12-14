import React, { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext([])

const useCart = () => { 
 return useContext(CartContext)
 }
 

const CartProvider = ( {defaultValue = [], children} ) => {
  
    const [cart, setCart] = useState(defaultValue)

    const addToCart = (item) => {
        setCart( prevState => {
            return prevState.concat ( item )
        } )
    }

    const clearCart = () => { setCart([]) }

  const context = {
    cart,
    addToCart,
    clearCart
  }


    return(
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
 }

export {useCart, CartProvider}
export default CartContext