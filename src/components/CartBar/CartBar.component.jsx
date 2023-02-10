import React, { useContext } from 'react'

import {
  Container,
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar
} from '@mui/material'


import { CartContext } from '../../contexts/cart.context';


import { BsBagDash, BsCart3, BsChevronRight } from "react-icons/bs";
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import CartDrawer from '../CartDrawer/CartDrawer.component';

import * as cartBarStyle from './cartBarStyle.module.css'

export default function CartBar() {
  const { isCartOpen } = useContext(CartContext)

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'transparent', color: 'black' }}>
        <Toolbar>
          <IconButton sx={{ mr: 1 }}>
            <div className={cartBarStyle.bagButton}>
              <BsBagDash />
            </div>
            <Typography>Pick Up</Typography>
            <Typography>|</Typography>
            <Typography>ASAP</Typography>
            <BsChevronRight />
          </IconButton>
          <div className={cartBarStyle.navLink}>  
                <CartIcon />
                {isCartOpen && <CartDrawer />}
              </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
