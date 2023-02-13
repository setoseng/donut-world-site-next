import React, { useState } from 'react'

import {
  AppBar,
  CssBaseline,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Link,
  Typography,
 } from '@mui/material'

import { useTheme } from '@mui/system'

import { Link as GatsbyLink } from 'gatsby'

import AddressForm from '../components/CheckOutForm/AddressForm/AddressForm.component'
import PaymentForm from '../components/CheckOutForm/PaymentForm/PaymentForm.component'
import ReviewForm from '../components/CheckOutForm/ReviewForm/ReviewForm.component'
import CustomAppBar from '../components/CustomAppBar/CustomAppBar.component'

const steps = ['Shipping address', 'Payment details', 'Review your order']

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://donutworld.net/">
        Donut World
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const getStepContent = (step) => {
  switch(step) {
    case 0: 
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <ReviewForm />
    default:
      throw new Error('Unknown Step')
  }
}

const Checkout = () => {
  const theme = useTheme()
  const [ activeStep, setStep ] = useState(0)

  const handleNext = () => {
    setStep(activeStep + 1)
  }
  const handleBack = () => {
    setStep(activeStep - 1)
  }

  return (
    <>
      <CssBaseline />
      <CustomAppBar>
        <Link
          to="/ordering"
          component={GatsbyLink}
          sx={{
            textDecoration: 'none',
            color: 'rgb(61 61 61 / 69%)',
          }}
        >
          Back to Menu
        </Link>
      </CustomAppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <Copyright />
      </Container>
    </>
  )
}

export default Checkout