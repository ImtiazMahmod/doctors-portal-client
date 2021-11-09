import { Box } from "@mui/system";
import React from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  return (
    <Box>
      <AppointmentBanner />
      <AvailableAppointment />
    </Box>
  );
};

export default Appointment;
