import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const PackageDetails = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Package
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
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="unit"
            name="unit"
            label="Unit (e.g.. Tablets, Packages)"
            fullWidth
            variant="standard"
            autoComplete='off'
          />
        </Grid>
        
      </Grid>
    </>
  )
}

export default PackageDetails