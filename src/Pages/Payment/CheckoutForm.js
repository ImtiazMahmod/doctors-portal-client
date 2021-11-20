import { Button, Alert, CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "./../../Hooks/useAuth.js";

const CheckoutForm = ({ payment }) => {
  const { price, patientName, _id } = payment;
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  console.log(price);
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data);
      });
  }, [price]);
  console.log(patientName, user.email);
  const handleSubmit = async (e) => {
    // Block native form submission.
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }

    ///confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentIntent);
      setProcessing(false);
      setSuccess("Payment processed successfully");

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };

      ///update to database
      fetch(`http://localhost:5000/appointment/${_id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            type="submit"
            disabled={!stripe || success}
          >
            Pay ${payment?.price}
          </Button>
        )}
      </form>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert>{success}</Alert>}
    </>
  );
};

export default CheckoutForm;
