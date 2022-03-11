import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";

// pages
import Profile from "Pages/Chemist/Profile";


const DivStyle = styled("div")({
  margin: "24px",
});

const chemist = [
  { name: "Vasu Tiwari", contact: "0987654321", id: "1234567890" },
];

const DashBoardChemist = () => {
  return (
    <>
      <DivStyle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Profile />
          </Grid>
          
        </Grid>
      </DivStyle>
    </>
  );
};

export default DashBoardChemist;
