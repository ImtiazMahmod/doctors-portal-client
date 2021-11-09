import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const email = e.target.value;

    console.log(email);
    setEmail(email);
  };
  console.log(email);

  const idToken = localStorage.getItem("idToken");
  const handleMakeAdmin = (e) => {
    const user = { email };

    ///make admin
    fetch("https://serene-citadel-59200.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${idToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        } else {
          setSuccess(false);
        }
      });
    e.preventDefault();
  };
  console.log(success);

  return (
    <Box>
      <h2>Make an Admin</h2>
      <form onSubmit={handleMakeAdmin}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleOnBlur}
          label="Email"
          type="email"
          variant="standard"
        />{" "}
        <br />
        <Button type="submit" sx={{ mt: 3 }} variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert>Successfully made admin</Alert>}
    </Box>
  );
};

export default MakeAdmin;
