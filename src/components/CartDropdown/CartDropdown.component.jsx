import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { CartContext } from '../../contexts/cart.context'

import { Button } from '@mui/material'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styles.jsx'


const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartDropdownContainer>
      {/* <CartItems>
        { cartItems.length ?
          cartItems.map((item) => 
            <CartItem key={item.id} cartItem={item}/>
          ) : <EmptyMessage>Cart is Empty</EmptyMessage>
        }
      </CartItems> */}
      <Link to='/checkout' onClick={goToCheckoutHandler}>
        <Button variant="contained">CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown