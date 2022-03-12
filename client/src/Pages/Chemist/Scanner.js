import { React, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

const Scanner = ({handleClose}) => {
  let navigate = useNavigate();
  const toPrescriptionPage = () => {
    navigate("/chemist/dispense-drug");
  };

  const [data, setData] = useState("");

  return (
    <>
      <Box style={{ maxWidth: "400px" }}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              console.log("done");
              navigate("/chemist/dispense-drug");
              handleClose();
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      </Box>
    </>
  );
};

export default Scanner;
