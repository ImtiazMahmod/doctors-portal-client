import { useContext } from "react";
import { AppointmentContext } from "../Context/AppointmentProvider";

const useAppointment = () => {
  return useContext(AppointmentContext);
};

export default useAppointment;
