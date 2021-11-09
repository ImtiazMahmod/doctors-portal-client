import { Container, Grid } from "@mui/material";
import React from "react";
import Calendar from "./../../Appointment/Calendar/Calendar";
import Appointments from "./../Appointments/Appointents";
const DashboardHome = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Calendar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Appointments />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;
