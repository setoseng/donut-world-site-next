import React, { useContext, useState, useEffect } from 'react'

import {
  Button,
  Drawer,
  Box,
  Typography,
  Divider,
} from '@mui/material'

import { CartContext } from '../../contexts/cart.context'
import { ModalContext } from '../../contexts/modal.context'

import CartDrawerItem from '../CartDrawerItem/CartDrawerItem.component'

const CartDrawer = () => {
  const { 
    open,
    handleClose,
    selectedItem,
    itemCount,
    handleCountDecrease,
    handleCountIncrease,
  } = useContext(ModalContext)
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const [ cartState, setCartState]  = useState([])

  const openDrawer = () => setIsCartOpen(true)
  const closeDrawer = () => setIsCartOpen(false)

  useEffect(() => {
    setCartState(cartItems)
  }, [cartItems])

  return (
    <Drawer
      anchor={'right'}
      open={isCartOpen}
      onClose={closeDrawer}
    >
      <Box sx={{ width: 500 }}>
        <Typography>You Cart</Typography>
        <Divider />
        {
          cartItems.map((item) => 
            <CartDrawerItem item={item}/>
          )
        }
      </Box>
    </Drawer>
  )
}

export default CartDrawer