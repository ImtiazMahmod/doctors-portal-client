import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import MuiButton from "../../Shared/StylledComponent/MuiButton.js/MuiButton";
import useAppointment from "../../../Hooks/useAppointment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BookingModal({ book, handleClose, open }) {
  const { date, setBookingSuccess } = useAppointment();

  const { user } = useAuth();
  const initialInfo = {
    patientName: user?.displayName,
    email: user?.email,
    phone: "",
  };
  const [bookData, setBookDate] = useState(initialInfo);

  const handleSubmit = (e) => {
    const appointment = {
      ...bookData,
      time: book.time,
      date: date.toLocaleDateString(),
      serviceName: book.title,
    };
    //send to server
    fetch("https://serene-citadel-59200.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleClose();
          setBookingSuccess(true);
        } else {
          setBookingSuccess(false);
        }
      });

    e.preventDefault();
    console.log(appointment);
  };

  const handleOnBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newBook = { ...bookData };
    newBook[name] = value;
    setBookDate(newBook);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {book.title}
              </Typography>
              <TextField
                disabled
                sx={{ my: 2, width: 1 }}
                id="outlined-basic"
                defaultValue={date.toDateString()}
                variant="outlined"
              />
              <TextField
                onBlur={handleOnBlur}
                name="patientName"
                sx={{ my: 2, width: 1 }}
                id="outlined-basic"
                value={user?.displayName}
                label="Your Name"
                variant="outlined"
              />
              <TextField
                onBlur={handleOnBlur}
                name="email"
                sx={{ my: 2, width: 1 }}
                id="outlined-basic"
                defaultValue={user?.email}
                label="Your Email"
                variant="outlined"
              />
              <TextField
                onBlur={handleOnBlur}
                name="phone"
                sx={{ my: 2, width: 1 }}
                id="outlined-basic"
                label="phone"
                variant="outlined"
              />
              <TextField
                disabled
                name="time"
                sx={{ my: 2, width: 1 }}
                id="outlined-basic"
                defaultValue={book.time}
                variant="outlined"
              />
              <MuiButton type="submit">Book</MuiButton>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default BookingModal;
