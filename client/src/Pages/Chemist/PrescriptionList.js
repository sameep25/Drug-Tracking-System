import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";

import PrescriptionDialog from "Component/DashboardLayout/PrescriptionDialog";
import { Paper, Typography } from "@mui/material";

const patientList = [
  {
    patientName: "Kapil",
    patientId: "567898765",
    prescriptionId: "y7656785678",
    date: "05-02-2022",
  },
  {
    patientName: "Anukriti",
    patientId: "567898765",
    prescriptionId: "y7656785678",
    date: "05-02-2022",
  },
  {
    patientName: "Harsh",
    patientId: "567898765",
    prescriptionId: "y7656785678",
    date: "05-02-2022",
  },
  {
    patientName: "Aashi",
    patientId: "567898765",
    prescriptionId: "y7656785678",
    date: "05-02-2022",
  },
];

const TableBox = styled("div")({
  marginLeft: "8vh",
  marginRight: "8vh",
  padding: "8px",
});

const StyledDiv = styled("div")({
  borderTop: "1px #919191 solid",
});

const PrescriptionList = () => {
  return (
    <>
      <Typography variant="h4" sx={{ color: "#5081bc", }}>Prescription List</Typography>
        <Paper sx={{mt:2, pb:2}}>
          <TableBox>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell size="medium">S.no</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>Patient Id</TableCell>
                  <TableCell>Prescription Id</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Prescription</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patientList.map((data, i) => (
                  <TableRow>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{data.patientName} </TableCell>
                    <TableCell>{data.patientId}</TableCell>
                    <TableCell>{data.prescriptionId}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>
                      <PrescriptionDialog />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableBox>
        </Paper>
    </>
  );
};

export default PrescriptionList;
