import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import useAuth from "../../../Hooks/useAuth";

const useStyles = makeStyles({
  root: {
    color: "white",
    textDecoration: "none",
  },
});

const Navigation = () => {
  const { user, logout } = useAuth();
  const { root } = useStyles();
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={root} to="/">
              {" "}
              Doctors Portal
            </Link>
          </Typography>
          <Link className={root} to="/appointment">
            <Button color="inherit">Appointment</Button>
          </Link>
          <Link className={root} to="/about">
            <Button color="inherit">About</Button>
          </Link>
          {user?.email && user?.displayName}
          {user?.email ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={handleLogin} color="inherit">
              Login
            </Button>
          )}
          <Link className={root} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
