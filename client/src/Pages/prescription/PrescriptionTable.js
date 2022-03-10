import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";

const prescriptionDataTable = [
  { name: "drug1", potency: "200mg", consumption: "once a day" ,duration: "30days",note: "note1" },
  { name: "drug2", potency: "20mg", consumption: "thrice a day(after meal)",duration: "30days",note: "note1" },
  { name: "drug3", potency: "200mg", consumption: "once a day",duration: "30days",note: "note1" },
  { name: "drug4", potency: "200mg", consumption: "once a day",duration: "30days",note: "note1" },
];

const TableBox = styled("div")({
  marginLeft: "8vh",
  marginRight: "8vh",
  padding: "8px",
});


const PrescriptionTable = () => {
  return (
    <>
      <TableBox>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell size="medium" >S.no</TableCell>
              <TableCell>Drug</TableCell>
              <TableCell>Potency</TableCell>
              <TableCell>Consumption</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptionDataTable.map((data, i) => (
              <TableRow>
                <TableCell>{i + 1}</TableCell>
                <TableCell> {data.name} </TableCell>
                <TableCell>{data.potency}</TableCell>
                <TableCell>{data.consumption}</TableCell>
                <TableCell>{data.duration}</TableCell>
                <TableCell>{data.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableBox>
    </>
  );
};

export default PrescriptionTable;
