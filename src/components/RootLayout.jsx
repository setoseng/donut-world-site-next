import React from 'react'

import { MenuProvider } from '../contexts/menu.context'
import { CartProvider } from '../contexts/cart.context'

const RootLayout = ({ children }) => {
  // To Do
  // Look into if we need to move CartProvider from Root to Ordering Page
  return (
    <>
    <MenuProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </MenuProvider>
    </>
  )
}

export default RootLayout

