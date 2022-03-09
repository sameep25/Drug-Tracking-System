import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, CardActionArea } from "@mui/material";

import { styled } from "@mui/material";


const Cards = () => {
  return (
    <Box >
      <Grid container spacing={12}>
        <Grid item xs={3}>
          <Card sx={{background:"pink"}}>
            <CardActionArea>
              <CardContent>
                <Typography>Generate New Prescription</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{background:"pink"}}>
            <CardActionArea>
              <CardContent>
                <Typography>Prescription List</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{background:"pink"}}>
            <CardActionArea>
              <CardContent>
                <Typography>Patient List</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{background:"pink"}}>
            <CardActionArea>
              <CardContent>
                <Typography>Notifications</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
