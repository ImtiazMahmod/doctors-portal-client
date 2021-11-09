import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import MuiButton from "../Shared/StylledComponent/MuiButton.js/MuiButton";
import img from "./../../images/login.png";
import CircularProgressWithLabel from "../Shared/CircularProgressWithLabel/CircularProgressWithLabel";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { authError, user, registerUser, isLoading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    //   console.log(field, value);
    const newRegister = { ...registerData };
    newRegister[field] = value;
    setRegisterData(newRegister);
    console.log(registerData);
  };

  const history = useHistory();
  const handleOnSubmit = (e) => {
    console.log(registerData);
    if (registerData.password != registerData.confirmPassword) {
      alert("hey not match your password");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };

  ///progress loader
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Grid container spacing={3}>
        <Grid
          sx={{ display: "flex", alignItems: "center" }}
          xs={8}
          sm={8}
          md={6}
          item
        >
          <Box>
            <Typography sx={{ mt: 5 }} fontWeight="bold" variant="h5">
              Register
            </Typography>
            {isLoading ? (
              <Box sx={{ m: 15 }}>
                {" "}
                <CircularProgressWithLabel value={progress} />
              </Box>
            ) : (
              <form onSubmit={handleOnSubmit}>
                <TextField
                  name="name"
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  required
                  id="outlined-required"
                  label="Your Name"
                />
                <TextField
                  name="email"
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  required
                  id="outlined-required"
                  label="Your Email"
                />
                <TextField
                  name="password"
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-password-input"
                  label="Your Password"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  name="confirmPassword"
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-password-input"
                  label="Confirm Your Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Box>
                  <MuiButton type="submit">Register</MuiButton>
                </Box>
              </form>
            )}
            <Box>
              <Button>
                Already Have an Account? <Link to="/login">Please Login</Link>
              </Button>
            </Box>
            {user?.email && (
              <Alert severity="success">Successfully created account</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
        </Grid>
        <Grid xs={8} sm={8} md={6} item>
          <img width="100%" src={img} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
