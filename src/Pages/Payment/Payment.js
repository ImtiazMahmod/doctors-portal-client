import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwphtIbfYIfrfwwtg6heyRLJ6FNQpkFDNw2r9Zp2NBS8sQXerOMZHhLyIeFDijomeJPlwnTeuL8JLFYAcdUTYdM00L5QJBqMd"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [payment, setPayment] = useState({});
  //load user payment details
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
      });
  }, []);

  console.log(payment);
  return (
    <div>
      <Typography>Pay for : {payment?.serviceName}</Typography>
      <Typography>Total Payment: ${payment?.price}</Typography>
      {payment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

////step
/* 
install stripe and stripe react
elements
checkout form
  ---
*/
