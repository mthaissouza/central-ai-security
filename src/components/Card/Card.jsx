import "./Card.css";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import DialogCharacter from "../Dialog/Dialog";

const Card = (props) => {
  const { name, status, species, image, gender, location, origin } = props;
  const [open, setOpen] = useState(false);

  const statusStyle = {
    backgroundColor: status === "Alive" ? "#04e800" : "#e80000",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Card">
        <div className="Title">
          <Typography
            variant="h4"
            onClick={handleClickOpen}
            className="NameTitle"
          >
            {name}
          </Typography>
          <div className="Container">
            <div style={statusStyle} className="Status"></div>
            <Typography variant="subtitle2">
              {status} - {species}
            </Typography>
          </div>
        </div>
        <div className="Body">
          <img src={image} className="Image" />
        </div>
      </div>
      <DialogCharacter
        open={open}
        onClose={handleClose}
        name={name}
        gender={gender}
        location={location}
        origin={origin}
      ></DialogCharacter>
    </>
  );
};

export default Card;
