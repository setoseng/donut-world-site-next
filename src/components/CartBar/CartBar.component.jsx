import React, { useContext } from 'react'
import {
  Container,
  Box,
  Typography,
  AppBar,
  IconButton,
  Button,
  Toolbar,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import LocalMallIcon from '@mui/icons-material/LocalMall';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDrawer from '../CartDrawer/CartDrawer.component';

export default function CartBar() {
  const { isCartOpen } = useContext(CartContext)
  const theme = useTheme()
  return (
      <AppBar position="sticky" sx={{ flexGrow: 1, backgroundColor: 'white', color: 'black' }}>
        <Toolbar sx={{ ml: 5 }}> 
          <IconButton sx={{
              mr: 1.5,
              color: theme.palette.primary.main,
              backgroundColor: '#f6416b43',
              '&:hover': { backgroundColor: '#f6416b49' },
            }}
          >
            <LocalMallIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 1, flexGrow: 1 }}>
            <Typography variant="h8">Pick Up</Typography>
            <Typography>|</Typography>
            <Typography variant="h8">ASAP</Typography>
            <ChevronRightIcon />
          </Box>
            <Button size="large">
              <CartIcon />
              {isCartOpen && <CartDrawer />}
            </Button>
        </Toolbar>
      </AppBar>
  )
}
