import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import img from "./../../images/login.png";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import MuiButton from "../Shared/StylledComponent/MuiButton.js/MuiButton";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { authError, user, userLogin, isLoading, googleSignIn } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const location = useLocation();
  const history = useHistory();
  console.log("from", location?.state?.from?.pathname);
  console.log(loginData);
  const handleOnSubmit = (e) => {
    userLogin(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  ///google login
  const handleGoogleLogin = () => {
    googleSignIn(location, history);
  };
  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            item
            xs={8}
            sm={8}
            md={6}
          >
            <Box>
              <Typography sx={{ mt: 5 }} fontWeight="bold" variant="h5">
                Login
              </Typography>
              <form onSubmit={handleOnSubmit}>
                <TextField
                  name="email"
                  onBlur={handleOnChange}
                  sx={{ width: "75%", m: 1 }}
                  required
                  id="outlined-required"
                  label="Your Email"
                />
                <TextField
                  name="password"
                  onBlur={handleOnChange}
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-password-input"
                  label="Your Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Box>
                  <MuiButton type="submit">Login</MuiButton>
                </Box>
              </form>
              <Button>
                New User? <Link to="/register"> Please Register</Link>
              </Button>{" "}
              <br />
              <Button
                onClick={handleGoogleLogin}
                sx={{ mt: 3, borderTop: 1 }}
                variant="contained"
              >
                Google Sign In
              </Button>
              <br />
              <br />
              {isLoading && (
                <Box>
                  <CircularProgress color="secondary" />
                </Box>
              )}
              {user?.email && (
                <Alert severity="success">Successfully logged in</Alert>
              )}{" "}
              {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={6}>
            <img width="100%" src={img} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
