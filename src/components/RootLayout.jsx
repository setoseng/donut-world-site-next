import React from 'react'

import { MenuProvider } from '../contexts/menu.context'
import { CartProvider } from '../contexts/cart.context'

const RootLayout = ({ children }) => {
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

