import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "../../Shared/StylledComponent/MuiButton.js/MuiButton";
import chair from "./../../../images/chair.png";
import bg from "./../../../images/bg.png";

const HomeBanner = () => {
  const style = {
    minHeight: 500,
    height: "80vh",
    display: "flex",
    alignItems: "center",
    background: `url(${bg})`,
  };
  return (
    <Box sx={{ ...style }}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h3">
              Your Smile <br /> start here
            </Typography>
            <Typography sx={{ lineHeight: 2, margin: 5 }} variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et
              odio, blanditiis sed, quidem repellendus odit voluptates optio,
              itaque recusandae sequi fuga explicabo id neque voluptatibus
              repudiandae nostrum dolor provident!
            </Typography>
            <MuiButton>Get Appointment</MuiButton>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBanner;
