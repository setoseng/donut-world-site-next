import React, { useState, useEffect } from 'react'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {
  CssBaseline,
  Box,
  Container,
  Paper,
  Button,
  Link,
  Typography,
  CircularProgress,
  Stepper,
  StepLabel,
  Step,
 } from '@mui/material'

import { useTheme } from '@mui/system'

import { Link as GatsbyLink } from 'gatsby'

import CheckoutForm from "../components/CheckOutForm/CheckoutForm.component";
import AddressForm from '../components/CheckOutForm/AddressForm/AddressForm.component'
import PaymentForm from '../components/CheckOutForm/PaymentForm/PaymentForm.component'
import ReviewForm from '../components/CheckOutForm/ReviewForm/ReviewForm.component'
import CustomAppBar from '../components/CustomAppBar/CustomAppBar.component'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51Mb8MhJx5DmJ6KOb9YpZdtu5CAra4npu1fPGKCBQVBRXPtKHW0B5fJDvJhzc0Tlp4YhExxUAaMnqevkXEzLoqNuK00QemRNAi7"
);

const steps = ['Review your order', 'Checkout']

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

const Checkout = () => {
  const theme = useTheme()
  const [clientSecret, setClientSecret] = useState("")
  const [ activeStep, setStep ] = useState(0)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(".netlify/functions/payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        items: [{ id: "xl-tshirt" }],
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  const getStepContent = (step) => {
    switch(step) {
      case 1:
        if(clientSecret) {
          return (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )
        } else {
          return (
            <CircularProgress sx={{ alignSelf: 'center' }} />
          )
        }
              
      case 0:
        return <ReviewForm />
      default:
        throw new Error('Unknown Step')
    }
  }
 
  const handleNext = () => setStep(activeStep + 1)
  const handleBack = () => setStep(activeStep - 1)

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
          {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                We'll have your order ready in 10-15 minutes
              </Typography>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                {getStepContent(1)}
              </Box>
              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
              </Box> */}
            </>
          )}
        </Paper>
        <Copyright />
      </Container>
    </>
  )
}

export default Checkout