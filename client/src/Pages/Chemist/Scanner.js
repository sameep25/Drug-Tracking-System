import { React, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

const Scanner = () => {
  const toPrescriptionPage = () => {
    navigate("/chemist/update-prescription");
  };

  const [data, setData] = useState("");

  let navigate = useNavigate();
  return (
    <>
      <Box style={{ maxWidth: "400px" }}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              toPrescriptionPage();
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
