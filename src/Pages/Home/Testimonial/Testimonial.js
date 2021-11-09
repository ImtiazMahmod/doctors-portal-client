import { Container, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import quote from "./../../../images/quote.png";
import Reviews from "./reviews/reviews.js/Reviews";

const Testimonial = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${quote})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right  top 10vh",
    },
    verticalCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
    },
  });
  const { root, verticalCenter } = useStyle();
  return (
    <Container className={root}>
      <Box className={verticalCenter}>
        <Typography sx={{ textAlign: "left" }} variant="h6" color={blue[500]}>
          TESTIMONIAL
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          What Our Patients <br /> Says{" "}
        </Typography>
        <Reviews />
      </Box>
    </Container>
  );
};

export default Testimonial;
