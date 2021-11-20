import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAppointment from "../../../Hooks/useAppointment";
import useAuth from "./../../../Hooks/useAuth";

const Appointments = () => {
  const { user } = useAuth();
  const { date } = useAppointment();
  const [appointments, setAppointments] = useState([]);
  const today = date.toLocaleDateString();

  const idToken = localStorage.getItem("idToken");
  ///load specific user appointments
  useEffect(() => {
    fetch(
      `https://serene-citadel-59200.herokuapp.com/appointments?email=${user?.email}&date=${today}`,
      {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [today]);
  console.log(appointments, today);
  return (
    <Box>
      <Typography variant="h4">
        My total appointments {appointments.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Schedule</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">
                  {row?.payment ? (
                    "paid"
                  ) : (
                    <Link to={`/dashboard/payment/${row._id}`}>
                      <Button variant="contained">Pay</Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appointments;
