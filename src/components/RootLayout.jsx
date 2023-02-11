import React from 'react'

import { MenuProvider } from '../contexts/menu.context'
import { CartProvider } from '../contexts/cart.context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../contexts/theme.context'

const RootLayout = ({ children }) => {
  // To Do
  // Look into if we need to move CartProvider from Root to Ordering Page
  return (
    <>
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </MenuProvider>
    </ThemeProvider>
    </>
  )
}

export default RootLayout

