import { Alert, Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import DispenseDrugTable from 'Component/DispenseDrugTable'
import React from 'react'

const DispenseDrug = () => {

  const handleDrugDispensed = ()=>{

  }

  return (
    <Container maxWidth={false}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ width: '100%', p: 4 }}>
            <Grid container columnSpacing={2}>
              <Grid item md={2.5}>
                <img style={{ width: '90%', borderRadius: '70px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilYuvVE0ZlUe2hLC6mTtzpwavoZRWsuruyQ9nvzxg4aDLlRrne57RN7IjXNCUsYNSH-w&usqp=CAU" alt="doctor" />
              </Grid>
              <Grid item md={4}>
                <Typography variant="h6" fontWeight={600}>
                  Dr. Rehan Jain
                </Typography>
                <Typography variant="subtitle1" color={"grey"} >
                  Neurologist
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} color={"green"} >
                  Verified
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" sx={{ width: '100%', p: 4 }}>
            <Grid container columnSpacing={2}>
              <Grid item md={2.5}>
                <img style={{ width: '90%', borderRadius: '70px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSc5seYhr7FyM6KZBpaStLs7o3ET1PFqETQ&usqp=CAU" alt="doctor" />
              </Grid>
              <Grid item md={9}>
                <Typography variant="h6" fontWeight={600}>
                  Ritik Dubey
                </Typography>
                <Typography sx={{mt:1}} variant="subtitle1" fontWeight={600} color={"green"} >
                  Aadhar Card Verified
                </Typography>
                <Alert sx={{mt:1}} severity="warning">Patient has already taken drugs in past 28 days</Alert>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ mt: 2, width: '100%', p: 4 }}>
            <DispenseDrugTable />
            <Box sx={{ display:'flex', width: '100%' }}>
              <Button variant="contained" onClick={handleDrugDispensed}color='primary' sx={{ mt: 1, mb: -2, mr:'7%' ,ml: 'auto' }}>
                Dispense Drug
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Container >
  )
}

export default DispenseDrug