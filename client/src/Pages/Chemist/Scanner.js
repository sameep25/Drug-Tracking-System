import { React, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

const QrCodeScanner = () => {

  const updatePrescriptionPage = () =>{
    navigate("/chemist/update-prescription") ;
  }

  const [data, setData] = useState("");

  let navigate = useNavigate();
  return (
    <>
      <Box>
        <Box style={{ maxWidth: "400px" }}>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
                updatePrescriptionPage() ;
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />

        </Box>
      </Box>
    </>
  );
};

export default QrCodeScanner;
