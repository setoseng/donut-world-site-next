import React, { useEffect, useState } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

import {
  Button,
  Box,
} from '@mui/material'



const CheckoutForm = () => {
  const SITE_URL = 'htps://donutworld.net'
  const stripe = useStripe()
  const elements = useElements()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    if (!stripe) return
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )
    if (!clientSecret) return
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeed":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break;
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('this rans')
    if (!stripe || !elements) {
      return
    }
    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${SITE_URL}/success`
      }
    })
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }
    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading || !stripe || !elements} id="submit"
          sx={{
            my: 3,
            width: 150,
            height: 50,
            alignSelf: 'flex-end',
          }}
        >
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </Button>
      </Box>
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm