import "./Dialog.css";
import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const DialogCharacter = (props) => {
  const { open, onClose, name, gender, location, origin } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="Dialog">
        <DialogTitle className="Title">{name}</DialogTitle>
        <DialogContent className="Container">
          <div>
            <Typography className="TextGray">Gender: </Typography>
            <Typography>{gender}</Typography>
          </div>
          <div>
            <Typography className="TextGray">Last known location: </Typography>
            <Typography>{location}</Typography>
          </div>
          <div>
            <Typography className="TextGray">First seen in: </Typography>
            <Typography>{origin}</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default DialogCharacter;
