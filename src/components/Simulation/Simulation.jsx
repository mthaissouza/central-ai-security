import "./Simulation.css";
import React, { useState } from "react";

import userIcon from "../../assets/imgs/user-icon.png";
import gptImgLogo from "../../assets/imgs/artwork-removebg-preview.png";
import sendBtn from "../../assets/imgs/send.svg";
import { Button } from "@mui/material";

const Simulation = (props) => {
  return (
    <>
      <div className="chatsSimulacao">
        <div></div>
      </div>
      <div className="chatFooter">
        <Button
          className="sendSimulation"
          onClick={() => {}}
        >
          Enviar arquivo
        </Button>
      </div>
    </>
  );
};

export default Simulation;
