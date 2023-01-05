import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51MHbpREjlQACabQ01Awaqc367YXDzyrVpj9BtLXqeqXvKQMhpYqMq3PjNpNJYNndgHeCpR7U0XtLgkpy3tsv2HmL006z4uxFzS",
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2022-08-01",
    // Register this as an official Stripe plugin.
    // https://stripe.com/docs/building-plugins#setappinfo
    appInfo: {
      name: `Filamu`,
      version: "0.1.0",
    },
  }
);
