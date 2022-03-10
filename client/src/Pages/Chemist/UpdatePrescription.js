import { React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

const TableBox = styled("div")({
  marginLeft: "8vh",
  marginRight: "8vh",
  marginTop: "8vh",
  padding: "8px",
  border: "1px #919191 solid",
});

// temp data

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

const prescriptionDataInfo = [
  {
    name: "drug1",
    potency: "200mg",
    consumption: "once a day",
    quantity: "30",
    duration: "30days",
    note: "note1",
  },
  {
    name: "drug2",
    potency: "20mg",
    consumption: "thrice a day(after meal)",
    quantity: "30",
    duration: "30days",
    note: "note1",
  },
  {
    name: "drug3",
    potency: "200mg",
    consumption: "once a day",
    quantity: "30",
    duration: "30days",
    note: "note1",
  },
  {
    name: "drug4",
    potency: "200mg",
    consumption: "once a day",
    quantity: "30",
    duration: "30days",
    note: "note1",
  },
];

const prescriptionId =
  "qwert23456cvbn6789dfgh4567vbn5678vhjklhgfdrtyu89876t5rtghjkjnbvcrt6789876t5rhyjhgfr56798";

const UpdatePrescription = () => {
  const [data, setData] = useState(prescriptionDataInfo);

  const handleQuantityChange = (i) => (e) => {
    let newArr = [...prescriptionDataInfo];
    newArr[i][e.target.name] = e.target.value; // replace e.target.value with whatever you want to change it to

    console.log(prescriptionDataInfo);
  };

  return (
    <div>
      <TableBox>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Drug-Name</TableCell>
              <TableCell>Drugs-Quantity</TableCell>
              <TableCell>Diapansed-Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptionDataInfo.map((data, i) => (
              <TableRow>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{data.name} </TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>
                  <TextField
                    autoComplete="off"
                    name="quantity"
                    id="drugQuantity"
                    autoFocus
                    onChange={handleQuantityChange(i)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableBox>
    </div>
  );
};

export default UpdatePrescription;
