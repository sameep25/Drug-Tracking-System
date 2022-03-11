import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, styled } from "@mui/material";

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
        <Paper sx={{pb:3}}>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Profile />
            </Grid>
          </Grid>
        </Paper>
      </DivStyle>
    </>
  );
};

export default DashBoardDoctor;
