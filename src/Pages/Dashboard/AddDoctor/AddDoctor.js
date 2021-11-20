import { Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://serene-citadel-59200.herokuapp.com/doctors", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("doctors added");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Add Doctor</Typography>
        <TextField
          onBlur={(e) => setName(e.target.value)}
          sx={{ mt: 1, width: "75%" }}
          label="name"
          required
        />
        <TextField
          type="email"
          onBlur={(e) => setEmail(e.target.value)}
          sx={{ mt: 1, width: "75%" }}
          label="email"
          required
        />
        <Input
          onBlur={(e) => setImage(e.target.files[0])}
          accept="image/*"
          sx={{ my: 1, width: "75%" }}
          type="file"
        />{" "}
        <br />
        <Button type="submit" variant="contained">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
