import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, styled } from "@mui/material";
import { CgProfile, CgUserList, CgNotes } from "react-icons/cg";

const StyledDiv = styled("div")({
  margin: "1vh",
  background: "#ffffff",
  padding: "1vh",
  borderRadius: "5px",
});

const CardBox = styled("div")({
  margin: "1vh",
  padding: "1vh",
  borderRadius: "5px",
});

const ContentBox = styled("Box")({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginRight: "10px",
  },
});

const InformationBar = () => {
  return (
    <StyledDiv>
      <CardBox>
        <Card sx={{background:"#f6f8fb"}} >
          <CardActionArea>
            <CardContent>
              <ContentBox>
                <Box>
                  <CgNotes size={30} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    Total Prescriptions
                  </Typography>
                  <Typography sx={{ color: "#5081bc" }}>50</Typography>
                </Box>
              </ContentBox>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardBox>
      <CardBox>
        <Card sx={{background:"#f6f8fb"}}>
          <CardActionArea>
            <CardContent>
              <ContentBox>
                <Box>
                  <CgUserList size={30} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    Total Patients
                  </Typography>
                  <Typography sx={{ color: "#5081bc" }}>41</Typography>
                </Box>
              </ContentBox>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardBox>
      <CardBox>
        <Card sx={{background:"#f6f8fb"}}>
          <CardActionArea>
            <CardContent>
              <ContentBox>
                <Box>
                  <CgProfile size={30} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    Status
                  </Typography>
                  <Typography sx={{ color: "#5081bc" }}>Good</Typography>
                </Box>
              </ContentBox>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardBox>
    </StyledDiv>
  );
};

export default InformationBar;
