import React, { useContext } from 'react'
import { CartContext } from '../context/Cartcontext'

export const Cart = () => {
    const {count,setcount} = useContext(CartContext)
  return (
    <div>Cart
    
    <button onClick={()=>setcount(count++)} >add to cart</button>
    
    </div>
  )
}
