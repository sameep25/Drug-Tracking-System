import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material";

import DashboardCardsDoctor from "Pages/Doctor/DashboardCardsDoctor";

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

const doctor = [
  { name: "Sameep Vishwakarma", contact: "1234567890", id: "0987654321" },
];

const imgUrl =
  "https://www.fortischennai.com/frontend/docimage/M-dtr-1554189149.png";

const Profile = () => {
  return (
    <>
      <Header>
        <Box>
          <Typography sx={{ color: "#919191" }}>Welcome</Typography>
          <Typography sx={{ color: "#5081bc" }}>Dr.{doctor[0].name}</Typography>
        </Box>

        <Button sx={{ marginLeft: "auto" }}>LogOut</Button>
      </Header>

      <ProfileBox>
        <Box>
          <img
            style={{ width: "90px", borderRadius: "50%" }}
            src={imgUrl}
            alt="doctordp"
          />
        </Box>
        <Box>
          <Typography>Dr. {doctor[0].name}</Typography>
          <Typography>Contact - {doctor[0].contact}</Typography>
          <Typography>Doctor Id - {doctor[0].id}</Typography>
        </Box>
      </ProfileBox>

      <Box>
        <DashboardCardsDoctor />
      </Box>



    </>
  );
};

export default Profile;
