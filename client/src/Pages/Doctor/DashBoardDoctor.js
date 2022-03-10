import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";

// pages
import Profile from "./Profile";
import InformationBar from "Pages/Doctor/InformationBar";

const DivStyle = styled("div")({
  margin: "24px",
});

const DashBoardDoctor = () => {
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

export default DashBoardDoctor;
