import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, CardActionArea } from "@mui/material";

import { styled } from "@mui/material";

// pages
import Profile from "./Profile";
import InformationBar from "Pages/Doctor/InformationBar";

const DivStyle = styled("div")({
  margin: "24px",
});

const NewPrescription = () => {
  return (
    <>
      <DivStyle>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Profile />
          </Grid>

          <Grid item xs={3}>
            <InformationBar />
          </Grid>
        </Grid>
      </DivStyle>
    </>
  );
};

export default NewPrescription;
