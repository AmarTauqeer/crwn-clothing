import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IBn26IIuSnyNovEpM9t7OQHJ07FOST6XEyZwCbBUJyMEFHJTwGJnHfvSsX5nLkjxDLyrovZmQOjEEIRZNmoNajD00ElrCeNAI";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull.");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckButton;
