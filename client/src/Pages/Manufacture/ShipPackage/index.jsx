import { Box, Button, Container, createTheme, CssBaseline, Grid, Paper, Step, StepLabel, Stepper, ThemeProvider, Typography } from '@mui/material'
import AddressForm from 'Component/AddressForm';
import PackageDetails from 'Component/PackageDetails';
import Summary from 'Component/Summary';
import React from 'react'

const steps = ['Package Details', 'Shipping address', 'Summary'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PackageDetails />;
    case 1:
      return <AddressForm />;
    case 2:
      return <Summary />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();


const ShipPackage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h4" variant="h4" align="center">
            Shipping Drug Package
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="subtitle1">
                  Your package order no <strong>#7612435</strong> have been succesfully added.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>

        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default ShipPackage