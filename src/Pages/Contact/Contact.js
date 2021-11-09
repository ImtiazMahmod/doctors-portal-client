import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "../Shared/StylledComponent/MuiButton.js/MuiButton";
import bg from "./../../images/bg.png";

const Contact = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg}),#00273E `,
      backgroundBlendMode: " add, luminosity",
    },
  });
  const { root } = useStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you are submit");
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Box className={root}>
        <Container sx={{ p: 5, color: "HighlightText" }} maxWidth="md">
          <form onSubmit={handleSubmit}>
            <Typography fontWeight="bold" color="info.main" variant="subtitle1">
              CONTACT US
            </Typography>
            <Typography variant="h4">Always Connect with us</Typography>

            <TextField
              sx={{ bgcolor: "white", width: "90%", mb: 2, mt: 5 }}
              id="filled-basic"
              label="Email*"
              variant="filled"
            />
            <TextField
              sx={{ bgcolor: "white", width: "90%", mb: 2 }}
              id="filled-basic"
              label="Subject*"
              variant="filled"
            />
            <TextField
              sx={{ bgcolor: "white", width: "90%", mb: 2 }}
              rows={8}
              id="filled-basic"
              label="Your message"
              variant="filled"
              multiline
            />
            <br />
            <MuiButton type="submit" variant="contained">
              Submit
            </MuiButton>
          </form>
        </Container>
      </Box>
    </Container>
  );
};

export default Contact;
