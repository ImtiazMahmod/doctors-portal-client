import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "../Calendar/Calendar";
import bg from "./../../../images/bg.png";
import chair from "./../../../images/chair.png";

const useStyles = makeStyles({
  root: {
    background: `url(${bg})`,
  },
});
const AppointmentBanner = () => {
  const { root } = useStyles();
  return (
    <Box className={root}>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Calendar />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img width="100%" src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
