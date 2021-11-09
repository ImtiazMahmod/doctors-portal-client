import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import allInfo from "./info";

const InfoCard = () => {
  return (
    <Container sx={{ mt: -10 }}>
      <Grid
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={{ sm: 2, md: 3 }}
      >
        {allInfo.map(({ Icon, title, desc, bg }) => (
          <Grid xs={4} sm={4} md={4} style={{ padding: 0 }} item>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                p: 5,
                background: bg,
                color: "HighlightText",
                mx: 1,
              }}
              variant="outlined"
            >
              <Icon sx={{ fontSize: 50, mx: 3, color: "#fff" }} />
              <Box sx={{ textAlign: "start" }}>
                <Typography fontWeight="bold" variant="h6">
                  {title}
                </Typography>
                <Typography variant="subtitle1" color="lightgray">
                  {desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoCard;
