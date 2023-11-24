import "./Messagens.css";
import React, { useState } from "react";

import userIcon from "../../assets/imgs/user-icon.png";
import gptImgLogo from "../../assets/imgs/artwork-removebg-preview.png";
import sendBtn from "../../assets/imgs/send.svg";

const Messagens = (props) => {
  const { chats, indexChat, inputValue, setInputValue, handleSend } = props;

  return (
    <>
      <div className="chats">
        {chats.map((chat, index) => {
          if (indexChat === index) {
            return chat.messages.map((message, index) => (
              <>
                {message.role === "user" ? (
                  <div className="chat user" key={index}>
                    <img src={userIcon} alt="" className="chatImg" />
                    <p className="txt">{message.content}</p>
                  </div>
                ) : (
                  <div className="chat bot" key={index}>
                    <img src={gptImgLogo} alt="" className="chatImg" />
                    <p className="txt">{message.content}</p>
                  </div>
                )}
              </>
            ));
          }
        })}
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            placeholder="Send a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="send" onClick={() => handleSend()}>
            <img src={sendBtn} alt="Send" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Messagens;
