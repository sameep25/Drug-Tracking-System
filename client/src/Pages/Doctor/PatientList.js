import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const patientListData = [
  {
    name: "Anukriti Jain",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "Female",
    prescription : [
        {
          date: "2022-01-05",
          prescriptionId: "11091700",
        },
        {
          date: "2022-01-02",
          prescriptionId: "110917wer",
        },
      ],
  },
  {
    name: "Aashi Sharma",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "Female",
    prescription : [
        {
          date: "2022-01-05",
          prescriptionId: "11091700",
        },
        {
          date: "2022-01-02",
          prescriptionId: "110917wer",
        },
      ],
  },

  {
    name: "Kapil Chouskey",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "MALE",
    prescription : [
        {
          date: "2022-01-05",
          prescriptionId: "11091700",
        },
        {
          date: "2022-01-02",
          prescriptionId: "110917wer",
        },
      ],
  },
  {
    name: "Vasu Tiwari",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "MALE",
    prescription : [
        {
          date: "2022-01-05",
          prescriptionId: "11091700",
        },
        {
          date: "2022-01-02",
          prescriptionId: "110917wer",
        },
      ],
  },
  {
    name: "Harsh Shivhare",
    contact: "1234567890",
    aadharNo: "0987654321",
    age: "21",
    gender: "MALE",
    prescription : [
        {
          date: "2022-01-05",
          prescriptionId: "11091700",
        },
        {
          date: "2022-01-02",
          prescriptionId: "110917wer",
        },
      ],
  },
];

function Row(props) {
  const { patient,key} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>{key + 1}</TableCell>
        <TableCell>{patient.name}</TableCell>
        <TableCell>{patient.contact}</TableCell>
        <TableCell>{patient.aadharNo}</TableCell>
        <TableCell>{patient.age}</TableCell>
        <TableCell>{patient.gender}</TableCell>
        <TableCell>Prescription
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Prescription</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patient.prescription.map((prescriptionRow) => (
                    <TableRow key={prescriptionRow.date}>
                      <TableCell component="th" scope="row">
                        {prescriptionRow.date}
                      </TableCell>
                      <TableCell>{prescriptionRow.prescriptionId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientListData.map((patient, i) => (
            <Row patient={patient} key={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
