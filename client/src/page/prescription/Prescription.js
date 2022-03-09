import * as React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

// components
import PrescriptionTable from "./PrescriptionTable";
import QrCode from "./QrCode";

// css
const HeaderParent = styled("div")({
  background: "#5081bc",
  marginLeft: "4vh",
  marginRight: "4vh ",
  marginTop: "4vh",

  color: "white",
  display: "flex",
});

const HeaderLeft = styled("Box")({
  padding: "8px",
  fontSize: "2rem",
});

const HeaderRight = styled("Box")({
  padding: "8px",
  fontSize: "1rem",
  marginLeft: "auto",
  marginTop: "auto",
});

const DoctorBox = styled("div")({
  padding: 8,
  marginTop: "1rem",
  marginLeft: "4vh",
  borderBottom: "1px #919191 solid",
  "& > *": {
    fontSize: "14px",
    color: "#515151",
  },
});

const PatientBox = styled("div")({
  padding: 8,
  marginTop: "0.5rem",
  marginLeft: "4vh",

  "& > *": {
    fontSize: "14px",
    color: "#515151",
  },
});

const TableHeader = styled("div")({
  marginLeft: "4vh",
  marginRight: "4vh ",
  marginTop: "8px",
  background: "#5081bc",
  padding: "8px",
  color: "white",
});

// tempData
const doctor = [
  { name: "Sameep Vishwakarma", contact: "1234567890", id: "0987654321" },
];

const patient = [
  {
    name: "Kapil Chouskey",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "MALE",
  },
];

const prescriptionId =
  "qwert23456cvbn6789dfgh4567vbn5678vhjklhgfdrtyu89876t5rtghjkjnbvcrt6789876t5rhyjhgfr56798";
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const Prescription = () => {
  return (
    <>
      <Container
        maxWidth={"md"}
        sx={{
          border: "1px solid #919191",
          minHeight: "100vh",
          margin: "24px auto",
          paddingTop: "24px",
        }}
      >
        <HeaderParent>
          <HeaderLeft>Prescription</HeaderLeft>
          <HeaderRight>
            <Typography>Date : {date}</Typography>
          </HeaderRight>
        </HeaderParent>

        <Grid container>
          <Grid item xs={8}>
            <DoctorBox>
              <Typography style={{ color: "#5081bc" }}>
                Doctor Details -
              </Typography>
              <Typography>Dr. {doctor[0].name}</Typography>
              <Typography>Contact - {doctor[0].contact}</Typography>
              <Typography>Doctor Id - {doctor[0].id}</Typography>
            </DoctorBox>

            <PatientBox>
              <Typography style={{ color: "#5081bc" }}>
                Patient Details -
              </Typography>
              <Typography>{patient[0].name}</Typography>
              <Typography>Contact - {patient[0].contact}</Typography>
              <Typography>Aadhar Id - {patient[0].aadharNo}</Typography>
              <Typography>Gender - {patient[0].gender}</Typography>
              <Typography>Age - {patient[0].age}</Typography>
            </PatientBox>
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <QrCode prescriptionId={prescriptionId} />
            </Box>
          </Grid>
        </Grid>
        <TableHeader>
          <Typography>Drug-List</Typography>
        </TableHeader>
        <PrescriptionTable />
      </Container>
    </>
  );
};

export default Prescription;
