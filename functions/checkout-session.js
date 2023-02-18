const stripe = require("stripe")(process.env.STRIPE_SECRET);

const PROD_SITE_DOMAIN = 'https//donutworld.net'
const DEV_SITE_DOMAIN = 'http://localhost:8888'


exports.handler = async (event, context) => {
  console.log(context)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${DEV_SITE_DOMAIN}/checkout?success=true`,
    cancel_url: `${DEV_SITE_DOMAIN}/checkout?canceled=true`,
  });
  return {
    statusCode: 303,
    header: {
      Location: session.url
    },
    body:JSON.stringify({
      url: session.url
    })
  };
};