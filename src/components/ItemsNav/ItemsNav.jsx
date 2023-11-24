import "./ItemsNav.css";
import React, { useState } from "react";

import home from "../../assets/imgs/home.svg";
import chat from "../../assets/imgs/chat.svg";
import upload from "../../assets/imgs/upload.svg";
import phising from "../../assets/imgs/phising.svg";

const ItemsNav = (props) => {
  const { setOption } = props;

  return (
    <div className="lowSide">
      <div className="listItems" onClick={() => setOption("home")}>
        <img src={home} alt="Hme" className="listItemsImg" />
        Home
      </div>
      <div className="listItems" onClick={() => setOption("chat")}>
      <img src={chat} alt="Hme" className="listItemsImg" />
        Chat
      </div>
      <div className="listItems" onClick={() => setOption("upload")}>
        <img src={upload} alt="Pdf" className="listItemsImg" />
        Upload PDF
      </div>
      <div className="listItems" onClick={() => setOption("simulation")}>
        <img src={phising} alt="Pdf" className="listItemsImg" />
        Phising Simulation
      </div>
    </div>
  );
};

export default ItemsNav;
