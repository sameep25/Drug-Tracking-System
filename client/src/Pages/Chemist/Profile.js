import React from "react";

import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";

import DashboardCards from "Pages/Chemist/DashboardCards";

const Header = styled("Box")({
  display: "flex",
  marginLeft: "4vh",
  marginRight: "4vh ",
  borderBottom: "1px #919191 solid",
});

const ProfileBox = styled("Box")({
  display: "flex",
  alignItems: "center",
  marginLeft: "4vh",
  marginRight: "4vh ",
  padding: 8,
  borderBottom: "1px #919191 solid",
  "& > *": {
    marginRight: "4vh",
    color: "#919191",
  },
});

const chemist = [
  { name: "Vasu Tiwari", contact: "0987654321", id: "1234567890" },
];

const imgUrl =
  "https://www.fortischennai.com/frontend/docimage/M-dtr-1554189149.png";

const Profile = () => {
  return (
    <>

      <Paper sx={{ pb: 3 }}>

        <Header>
          <Box>
            <Typography sx={{ color: "#919191" }}>Welcome</Typography>
            <Typography sx={{ color: "#5081bc" }}>
              Mr.{chemist[0].name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>

            <Button sx={{ marginLeft: "auto" }}>LogOut</Button>
          </Box>
        </Header>

        <ProfileBox>
          <Box>
            <img
              style={{ width: "90px", borderRadius: "50%" }}
              src={imgUrl}
              alt="chemistdp"
            />
          </Box>
          <Box>
            <Typography>Mr. {chemist[0].name}</Typography>
            <Typography>Contact - {chemist[0].contact}</Typography>
            <Typography>Chemist Id - {chemist[0].id}</Typography>
          </Box>
        </ProfileBox>
        <Box>
          <DashboardCards />
        </Box>
      </Paper>
    </>
  );
};

export default Profile;
