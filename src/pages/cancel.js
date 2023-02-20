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

import CustomAppBar from '../components/CustomAppBar/CustomAppBar.component'

const estimateTime = `10-15 minutes`

const Cancel = () => {
  const theme = useTheme()
  const [clientSecret, setClientSecret] = useState("")
  const [ activeStep, setStep ] = useState(0)

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
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="left">
            The order was canceled. No order was sent to the restauraunt. If this is a mistake, please retry.
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

export default Cancel