import React, { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context';

import { BsBagDash, BsCart3, BsChevronRight } from "react-icons/bs";
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import * as cartBarStyle from './cartBarStyle.module.css'

export default function CartBar() {
  const { isCartOpen } = useContext(CartContext)
  return (
   <div className={cartBarStyle.container}>
    <div className={cartBarStyle.navBar}>
      <div className={cartBarStyle.navBrand}>
        <div className={cartBarStyle.bagButton}>
          <BsBagDash />
        </div>
        <p>Pick Up</p>
        <p>|</p>
        <p>ASAP</p>
        <BsChevronRight />
      </div>
      <div
        className={cartBarStyle.navLink}
      >  
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  </div>
  )
}
