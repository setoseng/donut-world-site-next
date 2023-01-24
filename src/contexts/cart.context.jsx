import React, { createContext, useContext, useEffect } from 'react'

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
  const value = ''

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
