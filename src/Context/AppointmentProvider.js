import React, { createContext, useState } from "react";

export const AppointmentContext = createContext();
const AppointmentProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const appointmentContext = {
    date,
    setDate,
    bookingSuccess,
    setBookingSuccess,
  };
  return (
    <AppointmentContext.Provider value={appointmentContext}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
