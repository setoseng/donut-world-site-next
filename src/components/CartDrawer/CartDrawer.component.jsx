import React, { useContext, useState, useEffect } from 'react'
import { round } from 'mathjs'

import {
  Button,
  Drawer,
  Box,
  Typography,
  ListItem
} from '@mui/material'

import { Link } from 'gatsby'

import { CartContext } from '../../contexts/cart.context'

import CartDrawerItem from '../CartDrawerItem/CartDrawerItem.component'

import {
  DrawerCartContainer,
  DrawerTotalContainer,
  EmptyCartContainer,
  EmptyCartText,
} from './CartDrawer.styles'

const CartDrawer = () => {
  const { cartCount ,cartTotal, cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const [ cartState, setCartState]  = useState([])
  const [ taxTotal, setTaxTotal] = useState(0)

  
  const openDrawer = () => setIsCartOpen(true)
  const closeDrawer = () => setIsCartOpen(false)

  useEffect(() => {
    setCartState(cartItems)
  }, [cartItems])

  useEffect(() => {
    if(cartTotal <= 0) return;
    setTaxTotal(round((cartTotal * 0.08), 2))
  }, [cartTotal])

  return (
    <Drawer
      anchor={'right'}
      open={isCartOpen}
      onClose={closeDrawer}
    >
      <Box sx={{ width: 500 }}>
        <DrawerCartContainer p={3}>
          <Typography>You Cart</Typography>
        </DrawerCartContainer>
        
        {
          cartCount!= 0
          ?
          <Box
            sx={{
              width: 500, 
            }}
          >
            <>
              {
                cartItems.map((item) => 
                  <CartDrawerItem key={item.id} item={item}/>
                )
              }
            </>
            <>
              <DrawerTotalContainer pr={3} pl={3} py={3} >
                <Typography variant='subtitle2'>Item Total: ${cartTotal}</Typography>
                <Typography variant='subtitle2'>Tax: ${taxTotal}</Typography>
              </DrawerTotalContainer>
              <Box p={3}>
                <Typography variant='h6'>Total Cost: ${round((cartTotal + taxTotal), 2)}</Typography>
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                  <Button fullWidth={true} variant="contained" sx={{mt: 2}}>Check Out</Button>
                </Link>
              </Box>
            </>
          </Box>
          :
          <EmptyCartContainer>
            <EmptyCartText>
              Add items to your order and
              <br />they will appear here.
            </EmptyCartText>
          </EmptyCartContainer>
        }
        
      </Box>
    </Drawer>
  )
}

export default CartDrawer