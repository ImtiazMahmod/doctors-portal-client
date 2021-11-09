import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ book }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Paper variant="outlined" sx={{ p: 5 }}>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body1">{book.time}</Typography>
        <Typography variant="caption">{book.space} SPACE AVAILABLE</Typography>
        <br />
        <Button onClick={handleOpen} variant="contained">
          Book Now
        </Button>
      </Paper>
      <BookingModal
        book={book}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  );
};

export default Booking;
