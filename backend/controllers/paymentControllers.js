// import stripe from "stripe";(process.env.STRIPE_SECRET_KEY)
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51NNLvQSAE0AH1rlZhKrJ0Yywi8HcWy0yBzLmK1OkylcmG4POhRGFoyX8fOG1YGyuQAVVzoZBAlJBus3HNTK1UGEm00KYqtVfM5"
);

export const processPayment = async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Ecommerce",
      },
    });

    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (err) {
    next(err);
  }
};

// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "Ecommerce",
//     },
//   });

//   res
//     .status(200)
//     .json({ success: true, client_secret: myPayment.client_secret });
// });

export const sendStripeApiKey = async (req, res, next) => {
  try {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  } catch (err) {
    next(err.response);
  }
};

// exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
//   res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY});
// });
