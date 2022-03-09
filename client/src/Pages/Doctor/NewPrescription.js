import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { END_POINT } from "utils/serverURL";
import axios from "axios";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function NewPrescription() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [patientAadharCardNumber, setPatientAadharCardNumber] = useState('')

  const [prescribeDrugInfo, setPrescribeDrugInfo] = useState([
    {
      drugName: '',
      drugPotency: '',
      drugDuration: '',
      drugConsumption: '',
      note: ''
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const addNewDrug = () => {
    setPrescribeDrugInfo(value => [...value, {
      drugName: '',
      drugPotency: '',
      drugDuration: '',
      drugConsumption: '',
      note: ''
    }])
  }

  const updateFieldChanged = index => e => {
    let newArr = [...prescribeDrugInfo]; // copying the old datas array
    newArr[index][e.target.name] = e.target.value; // replace e.target.value with whatever you want to change it to
  
    setPrescribeDrugInfo(newArr);
    console.log(prescribeDrugInfo);
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          New Prescription
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container >
            <Grid item xs={12} sm={12}>
              <TextField
                name="patientAadharNo"
                required
                fullWidth
                id="patientAadharNo"
                label="Patient Aadhar No"
                value={patientAadharCardNumber}
                onChange={(e) => setPatientAadharCardNumber(e.target.value)}
                autoFocus
              />
            </Grid>
          </Grid>

          {prescribeDrugInfo.map((value, index) => {

              return (
                <>
                  <Grid container maxWidth={"xs"} spacing={2} sx={{ borderRadius:'8px', background:'#fbfbfb', mt: 3, pt:1, pl:1, pb:3, pr:3 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="drugName"
                        required
                        fullWidth
                        id="drugName"
                        label="Drug Name"
                        value={value.drugName}
                        onChange={updateFieldChanged(index)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="drugPotency"
                        required
                        fullWidth
                        id="drugPotency"
                        label="Drug Potency"
                        value={value.drugPotency}
                        onChange={updateFieldChanged(index)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="drugConsumption"
                        required
                        fullWidth
                        id="drugConsumption"
                        label="Drug Consumption"
                        value={value.drugConsumption}
                        onChange={updateFieldChanged(index)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="drugDuration"
                        required
                        fullWidth
                        id="drugDuration"
                        label="Drug Duration"
                        value={value.drugDuration}
                        onChange={updateFieldChanged(index)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        name="note"
                        required
                        fullWidth
                        id="note"
                        label="Note"
                        value={value.note}
                        onChange={updateFieldChanged(index)}
                      />
                    </Grid>
                  </Grid>
                </>
              )
            })
          }
          <Button
            fullWidth
            variant="outlined"
            disabled={loading}
            onClick={addNewDrug}
            color="primary"
            sx={{ mt: 3, }}
          >
            Add New Drug
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? (
              <CircularProgressWithLabel value={progress} />
            ) : (
              "New Prescription"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
