import * as React from "react";
import { Button ,styled ,Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// pages
import Scanner from "Pages/Chemist/Scanner";


const QrCodeScanner = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button onClick={handleClickOpen}>Scan Qr-Code</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <Box sx={{width:"400px" ,height:"400px"}}>
              <Scanner />
            </Box>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default QrCodeScanner;
