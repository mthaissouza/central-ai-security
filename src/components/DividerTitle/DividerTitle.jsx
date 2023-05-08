import "./DividerTitle.css";
import React from "react";
import { Typography } from "@mui/material";

const DividerTitle = (props) => {
  const { title } = props;

  return (
    <div className="DividerTitle">
      <Typography className="Title" variant="h4">{title}</Typography>
      <div className="Divider" />
    </div>
  );
};

export default DividerTitle;
