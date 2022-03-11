import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const prescriptionDataTable = [
  { name: "drug1", potency: "200mg", consumption: "once a day", duration: "30days", note: "note1", beDispensed: 30, error: "Drugs cannot be dispensed more than prescibed", dispensed: '31' },
  { name: "drug2", potency: "20mg", consumption: "thrice a day(after meal)", duration: "30days", note: "note1", beDispensed: 15, dispensed: '10' },
  { name: "drug3", potency: "200mg", consumption: "once a day", duration: "30days", note: "note1", beDispensed: 30, dispensed: '30' },
  { name: "drug4", potency: "200mg", consumption: "once a day", duration: "30days", note: "note1", beDispensed: 10, dispensed: '0' },
];

const TableBox = styled("div")({
  padding: "8px",
});


const PrescriptionTable = () => {
  return (
    <>
      <TableBox>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell size="medium" >S.no</TableCell>
              <TableCell padding="normal">Drug</TableCell>
              <TableCell padding="normal">Potency</TableCell>
              <TableCell padding="normal">Consumption</TableCell>
              <TableCell padding="normal">Duration</TableCell>
              <TableCell padding="normal">Note</TableCell>
              <TableCell padding="normal" align="left">To Be Dispensed</TableCell>
              <TableCell padding="normal">Total Dispensed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptionDataTable.map((data, i) => (
              <TableRow >
                <TableCell padding="normal">{i + 1}</TableCell>
                <TableCell padding="normal"> {data.name} </TableCell>
                <TableCell padding="normal">{data.potency}</TableCell>
                <TableCell padding="normal">{data.consumption}</TableCell>
                <TableCell padding="normal">{data.duration}</TableCell>
                <TableCell padding="normal">{data.note}</TableCell>
                <TableCell padding="normal" align="left">{data.beDispensed}</TableCell>
                <TableCell padding="normal">
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    autoComplete="off"
                    name="quantity"
                    id="drugQuantity"
                    error={data.error && true}
                    value={data.dispensed}
                    sx={{ width: '75%' }}
                    helperText={data.error}
                  // onChange={handleQuantityChange(i)}
                  /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableBox>
    </>
  );
};

export default PrescriptionTable;
