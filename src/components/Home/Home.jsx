import "./Home.css";
import React, { useState } from "react";

import home from "../../assets/imgs/home.svg";
import gptImgLogo from "../../assets/imgs/artwork-removebg-preview.png";

const Home = () => {

  return (
    <div className="division">
      <img src={gptImgLogo} alt="" className="chatImgHome" />
      <p className="text">EvoluGuardian AI</p>
    </div>
  );
};

export default Home;
