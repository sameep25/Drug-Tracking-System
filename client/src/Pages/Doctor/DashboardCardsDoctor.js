import { Box, Container, Grid, Typography } from '@mui/material'
import DrugsShipped from 'Component/AdminDashboard/DrugsShipped'
import PatientPrescribed from 'Component/AdminDashboard/PatientPrescribed'
import TotalPrescriptionScanned from 'Component/AdminDashboard/TotalPrescriptionScanned'
import DrugsDispensed from 'Component/AdminDashboard/DrugsDispensed'
import React from 'react'


const DashboardCardsDoctor = () => {

  return (
    <Box
      sx={{
        minHeight: '100%',
        marginTop:"4vh" ,
      }}
    >
      
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
            <DrugsShipped title={"Total Drugs Dispensed"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <DrugsDispensed title={"Total Drugs Dispensed"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <PatientPrescribed title={"Total Patients Prescribe"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalPrescriptionScanned sx={{ height: '100%' }} title={"Total Prescription Scanned"}/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default DashboardCardsDoctor