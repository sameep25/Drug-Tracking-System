import React from "react";
import QRCode from "react-qr-code";
import {Box} from '@mui/material'

const QrCode = ({ prescriptionId }) => {
  return (
      <QRCode size={"200"} value={prescriptionId} />
  );
};

export default QrCode;
