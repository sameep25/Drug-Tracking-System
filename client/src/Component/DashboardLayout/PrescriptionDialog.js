import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import Prescription from "Pages/Prescription";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>View Prescription</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
      >
        <DialogContent  sx={{width:"max-content"}}>
          <Prescription />
        </DialogContent>
      </Dialog>
    </div>
  );
}
