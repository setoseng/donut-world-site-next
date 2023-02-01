import React, { useContext } from 'react' 
import { useState } from 'react';
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
    {cartCount.length <= 0 &&
      <ItemCount>
        {cartCount}
        {
          cartCount > 1
          ? 'items'
          : 'item'
        }
      </ItemCount>
    }
    <ItemCount>
      ${cartTotal}
    </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon