import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;
export const stripe = new Stripe(stripeSecretKey, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-08-01",
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: `Filamu`,
    version: "0.1.0",
  },
});
