import { Typography } from '@mui/material';
import React, { useContext } from 'react' 

import { CartContext } from '../../contexts/cart.context'

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from './CartIcon.styles.jsx'

const CartIcon = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartTotal 
  } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle />
    {/* {(cartCount > 0) &&
      <ItemCount>
        {cartCount}
        {
          cartCount > 1
          ? <Typography variant="h8"> ITEMS</Typography>
          : <Typography variant="h8"> ITEM</Typography>
        }
      </ItemCount>
    } */}
    <ItemCount>
      ${cartTotal}
    </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon