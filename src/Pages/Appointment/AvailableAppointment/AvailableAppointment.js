import { Alert, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import useAppointment from "../../../Hooks/useAppointment";
import useAuth from "../../../Hooks/useAuth";
import Booking from "../Booking/Booking";
import BookingModal from "../BookingModal/BookingModal";
const booking = [
  {
    id: 1,
    title: "Teeth Orthodontics",
    time: "8PM-10PM",
    space: 10,
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    time: "8PM-10PM",
    space: 10,
  },
  {
    id: 3,
    title: "Teeth Cleaning",
    time: "8PM-10PM",
    space: 10,
  },
  {
    id: 4,
    title: "Cavity Protection",
    time: "8PM-10PM",
    space: 10,
  },
  {
    id: 5,
    title: "Cavity Protection",
    time: "8PM-10PM",
    space: 10,
  },
  {
    id: 6,
    title: "Teeth Cleaning",
    time: "8PM-10PM",
    space: 10,
  },
];
const AvailableAppointment = () => {
  const { date, bookingSuccess } = useAppointment();

  return (
    <Container>
      <Box>
        <Typography variant="h4">
          Available date on {date?.toDateString()}
        </Typography>
        {bookingSuccess && <Alert>Booking Successfully</Alert>}
      </Box>
      <Grid container spacing={3}>
        {booking.map((book) => (
          <Grid key={book.id} item xs={12} sm={12} md={4}>
            <Booking book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
