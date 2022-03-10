import { Button, Container, createTheme, CssBaseline, Grid, Paper, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

const theme = createTheme();

const ReceivePackage = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h6" gutterBottom>
            Receive drug Package
          </Typography>

          <Grid container spacing={3}>

            <Grid item xs={12}>
              <TextField
                required
                id="drugName"
                label="Drug Name"
                name="drugName"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type={"number"}
                required
                id="potency"
                name="potency"
                label="Potency (.mg)"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type={"number"}
                required
                id="quantity"
                name="Quantity"
                label="quantity"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="unit"
                name="unit"
                label="Unit (e.g.. Tablets, Packages)"
                fullWidth
                autoComplete='off'
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="packageOrderNumber"
                label="Package Order Number"
                name="packageOrderNumber"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => { }} sx={{ mt: 3, ml: 1 }}>
                Submit
              </Button>
            </Grid>
          </Grid>


        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default ReceivePackage