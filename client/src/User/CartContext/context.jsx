import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from '../CartContext/reducer'

export const CartContext = createContext("Initial Value")

const getCartData = () => {
  const data = localStorage.getItem('cart')
  console.log(data)
  if (data == 'null' || 'undefined') {
    return []
  }
  return JSON.parse(data)
}
let data = {
  cart: getCartData()
}
export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>

  )
}









