const stripe = require("stripe")(process.env.STRIPE_SECRET);


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

exports.handler =  async (event, context) => {
  const { items } = event.body;
  //Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return {
    statusCode: 200,
    body:JSON.stringify({
      clientSecret: paymentIntent.client_secret,
    })
  };
};
