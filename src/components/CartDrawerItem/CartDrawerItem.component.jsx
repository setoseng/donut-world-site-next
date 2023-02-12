import React, { useContext } from 'react'

import {
  Button,
  Typography,
  Box,
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2'

import { round } from 'mathjs'

import { CartContext } from '../../contexts/cart.context'

import { DrawerItemContainer } from './CartDrawerItem.styles'



const CartDrawerItem = ({item}) => {
  const {name, quantity, price } = item
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

  const handleAddItem = () => addItemToCart(item)
  const handleRemoveItem = () => removeItemFromCart(item)
  const handleClearItem = () => clearItemFromCart(item)
  

  return (
    <DrawerItemContainer p={3}>
      <Box>
        <Typography>{name}</Typography>       
        <Typography>${round((price * quantity), 2)}</Typography>
      </Box>
      <Grid container direction="row" mt={2}>
        <Grid xs={5} md={5} columnGap={2} container direction="row" alignContent="center" alignItems="center">
          <Button
            variant="outlined"
            type="button"
            onClick={handleRemoveItem}
            disabled={quantity <=1 ? true : false}
            >
              -
            </Button>
          <Typography>{quantity}</Typography>
          <Button variant="outlined" type="button" onClick={handleAddItem}>+</Button>
        </Grid>
        <Grid xs={7} md={7}>
          <Button
            variant="contained"
            fullWidth={true}
            onClick={handleClearItem}
            >
            Remove Item
          </Button>
        </Grid>
      </Grid>
    </DrawerItemContainer>
  )
}

export default CartDrawerItem