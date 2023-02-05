import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart.context';
import {
  Typography,
} from '@mui/material';


const CartDrawerItem = ({item}) => {
  const {name, quantity, price } = item
  const { cartTotal } = useContext(CartContext)
  const [ taxTotal, setTaxTotal] = useState(0)

  const getTaxTotal = () => {
    setTaxTotal(Math.round((cartTotal * .08 * 100) / 100) )
    return taxTotal
  }

  return (
    <div>
      <Typography>{name}</Typography>       
      <Typography>${price * quantity}</Typography>
      <Typography>${cartTotal}</Typography>
      <Typography>${getTaxTotal}</Typography>
      <Typography>${cartTotal + taxTotal}</Typography>
    </div>
  )
}

export default CartDrawerItem