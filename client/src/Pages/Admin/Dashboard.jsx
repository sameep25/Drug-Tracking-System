import { Box, Container, Grid, Typography } from '@mui/material'
import DrugsShipped from 'Component/AdminDashboard/DrugsShipped'
import PatientPrescribed from 'Component/AdminDashboard/PatientPrescribed'
import TotalPrescriptionScanned from 'Component/AdminDashboard/TotalPrescriptionScanned'
import DrugsDispensed from 'Component/AdminDashboard/DrugsDispensed'
import React from 'react'

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: '100%',
      }}
    >
      <Typography sx={{
        pb: 3
      }} variant="h5">
        Welcome
      </Typography>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <DrugsShipped title={"Total Shipped"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <DrugsDispensed title={"Total Dispansed"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <PatientPrescribed title={"Patient Prescribed"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalPrescriptionScanned sx={{ height: '100%' }} title={"Prescription Scanned"}/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Dashboard