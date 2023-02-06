import React, { useContext } from 'react'

import {
  Button,
  Typography,
  Grid,
  Box,
} from '@mui/material';

import { ModalContext } from '../../contexts/modal.context';
import { CartContext } from '../../contexts/cart.context';

import { DrawerItemContainer } from './CartDrawerItem.styles';



const CartDrawerItem = ({item}) => {
  const {name, quantity, price } = item
  const {itemCount, handleCountDecrease, handleCountIncrease} = useContext(ModalContext)
  const { handleAddItem, cartTotal } = useContext(CartContext)

  return (
    <DrawerItemContainer p={3}>
      <Box>
        <Typography>{name}</Typography>       
        <Typography>${price * quantity}</Typography>
      </Box>
      <Grid container direction="row" mt={2}>
        <Grid xs={5} md={5} columnGap={2} container direction="row" alignContent="center" alignItems="center">
          <Button
            variant="outlined"
            type="button"
            onClick={handleCountDecrease}
            disabled={itemCount <=1 ? true : false}
            >
              -
            </Button>
          <Typography>{itemCount}</Typography>
          <Button variant="outlined" type="button" onClick={handleCountIncrease}>+</Button>
        </Grid>
        <Grid xs={7} md={7}>
          <Button
            variant="contained"
            fullWidth={true}
            onClick={handleAddItem}
            >
            Add To Cart ${cartTotal}
          </Button>
        </Grid>
      </Grid>
    </DrawerItemContainer>
  )
}

export default CartDrawerItem