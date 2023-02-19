import React, { useState, useContext, useEffect } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
 } from '@mui/material';
 import { round } from 'mathjs';

 import { CartContext } from '../../../contexts/cart.context';

 const SALES_TAX = .08

// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ]

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ]

const ReviewForm = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  const [ taxTotal, setTaxTotal] = useState(0)

  useEffect(() => {
    if(cartTotal <= 0) return;
    setTaxTotal(round((cartTotal * SALES_TAX), 2))
  }, [cartTotal])

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={item.description} />
            <Typography variant="body2">{item.quantity} x {item.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ padding:0 , m: 0, }}>
          <ListItemText primary="Tax" />
          <Typography variant="subtitle5" sx={{ fontWeight: 400 }}>
            ${round(taxTotal, 2)}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${round((cartTotal + taxTotal), 2)}
          </Typography>
        </ListItem>
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </>
  )
}
export default ReviewForm