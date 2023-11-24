import "./Chats.css";
import React, { useState } from "react";

import msgIcon from "../../assets/imgs/message.svg";

const Chats = (props) => {
  const { chats, indexChat, setIndexChat, setSelectedIdChat } = props;

  return (
    <div className="upperSideBottom">
      {chats.map((chat, index) => {
        return (
          <button
            key={index}
            className="query"
            onClick={() => {
              setIndexChat(index)
              setSelectedIdChat(chat.id)
            }}
            style={
              indexChat === index
                ? { backgroundColor: "#fff", color: "#000" }
                : {
                    backgroundColor: "transparent",
                    color: "rgba(222, 222, 222, 1)",
                  }
            }
          >
            <img src={msgIcon} alt="Query" />
            {chat.name}
          </button>
        );
      })}
    </div>
  );
};

export default Chats;
