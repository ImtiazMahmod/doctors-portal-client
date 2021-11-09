import { FacebookTwoTone, Google, Twitter } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import footerBg from "./../../../images/footer-bg.png";
const Footer = () => {
  const useStyles = makeStyles({
    root: {
      background: `url(${footerBg})`,
    },
    brand: {
      color: "InfoText",
      border: "1px solid blue",
      borderRadius: "50%",
      fontSize: "30px",

      marginLeft: 10,
      "&:hover": {
        background: "#00273E ",
        color: "white",
      },
    },
  });
  const { root, brand } = useStyles();
  return (
    <Box className={root}>
      <Container sx={{ p: 5 }}>
        <Grid container spacing={4}>
          <Grid item>
            <ListItem component="div">
              <br />
            </ListItem>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Emergency Dental Care" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Check Up" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Treatment for Personal Diseases" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Tooth Extraction" />
            </ListItemButton>
          </Grid>
          <Grid textAlign="left" item>
            <ListItem component="div" href="#">
              <Typography color="primary.main" fontWeight="bold" variant="h5">
                Services
              </Typography>
            </ListItem>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Tooth Extraction" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Check Up" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Treatment for Personal Diseases" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Emergency Dental Care" />
            </ListItemButton>
          </Grid>
          <Grid item>
            <ListItem component="div" href="#">
              <Typography color="primary.main" fontWeight="bold" variant="h5">
                Oral Health
              </Typography>
            </ListItem>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Tooth Extraction" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Check Up" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Treatment for Personal Diseases" />
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Emergency Dental Care" />
            </ListItemButton>
          </Grid>
          <Grid item>
            <ListItem component="div">
              <Typography color="primary.main" fontWeight="bold" variant="h5">
                Our Address
              </Typography>
            </ListItem>
            <Typography color="text.secondary" variant="subtitle1">
              Dhaka,Bangladesh
            </Typography>
            <FacebookTwoTone className={brand} />
            <Google className={brand} />
            <Twitter className={brand} />
          </Grid>
        </Grid>
        <Typography sx={{ mt: 5 }} variant="subtitle1">
          Copyright @2021 all rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
