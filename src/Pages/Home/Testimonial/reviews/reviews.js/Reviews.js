import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import patient from "./../../../../../images/people-1.png";
const patients = [
  {
    name: "Abdullah",
    address: "Dhaka",
    img: patient,
    review:
      "It is best supported for all kind of patients.I prefer doctors portal always for best service",
  },
  {
    name: "Ahmed",
    address: "CTG",
    img: patient,
    review:
      "It is best supported for all kind of patients.I prefer doctors portal always for best service",
  },
  {
    name: "Fahim",
    address: "Khulna",
    img: patient,
    review:
      "It is best supported for all kind of patients.I prefer doctors portal always for best service",
  },
];
const Reviews = () => {
  return (
    <Box>
      <Grid container columns={{ md: 12, sm: 8, xs: 4 }} spacing={3}>
        {patients.map((patient) => (
          <Grid item md={4} sm={4} xs={4}>
            <Card sx={{ maxWidth: 345, p: 5, mt: 5 }}>
              <CardContent>
                <Typography
                  sx={{ lineHeight: 2, fontWeight: "bold", textAlign: "start" }}
                  color="text.secondary"
                  variant="body2"
                >
                  {patient.review}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <img src={patient.img} alt="patient" height="50" width="50" />
                  <Box sx={{ textAlign: "start", mx: 2 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="info.main"
                      fontWeight="bold"
                      component="div"
                    >
                      {patient.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {patient.address}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
