import * as React from "react";
import { Button, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// pages
import Scanner from "Pages/Chemist/Scanner";


const QrCodeScanner = () => {
  const [open, setOpen] = React.useState(false);
  console.log(window.location.pathname)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    // if(window.location.pathname === '/chemist/dispense-drug')
  }, [])
  

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen} sx={{ width: '90%', mx: '12px', mb: '13px' }}>
        Scan Qr-Code
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ width: "400px", height: "400px" }}>
            <Scanner handleClose={handleClose} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrCodeScanner;
