import React from "react";
import QRCode from "react-qr-code";

const QrCode = ({ prescriptionId }) => {
  return (
    <div>
      <QRCode size={200} value={prescriptionId} />
    </div>
  );
};

export default QrCode;
