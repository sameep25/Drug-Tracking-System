import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import { Button, Typography ,Box } from "@mui/material";

import SearchField from "Pages/Admin/SearchField" ;

import { useNavigate } from "react-router-dom";

// temp data
const ChemistListData = [
  { name: "Sameep Vishwakarma", chemistId: "456765434567", status: "Sus" },
  { name: "Vasu Tiwari", chemistId: "344567654567", status: "Good" },
  { name: "Aashi Sharma", chemistId: "647645543567", status: "Sus" },
  { name: "Harsh Shivhare", chemistId: "954445673567", status: "Good" },
];

const TableBox = styled("div")({
  marginLeft: "8vh",
  marginRight: "8vh",
  padding: "8px",
});

const StyledDiv = styled("div")({
  borderTop: "1px #919191 solid",
});

const HeaderBox = styled("Box")({
    display:"flex",
    marginRight:"4vh" ,

})


const ChemistList = () => {
    
  const navigate = useNavigate();

  const createAlert = (name) => {
    console.log(name);
    alert(`Warning is given to ${name}`);
  };

  const toProfile = () => {
    navigate("/chemist");
  };

  return (
    <>
      <HeaderBox>
        <Typography variant="h4" sx={{ color: "#5081bc" }}>
        Chemist List
        </Typography>
        <Box sx={{ marginLeft:"auto" ,}}><SearchField /></Box>
      </HeaderBox>

      <StyledDiv>
        <TableBox>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>S.no</TableCell>
                <TableCell>Chemist Name</TableCell>
                <TableCell>Chemist Id</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Create Alert</TableCell>
                <TableCell>View Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ChemistListData.map((data, i) => (
                <TableRow>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{data.name} </TableCell>
                  <TableCell>{data.chemistId}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>
                    <Button onClick={() => createAlert(data.name)}>
                      Create Alert
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => toProfile()}>View Profile</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableBox>
      </StyledDiv>
    </>
  );
};

export default ChemistList;
