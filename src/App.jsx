import "./App.css";
import React, { useState, useEffect } from "react";
import gptLogo from "./assets/imgs/chatgpt.svg";
import addBtn from "./assets/imgs/add-30.png";

import Messagens from "./components/Messagens/Messagens";
import Chats from "./components/Chats/Chats";
import ItemsNav from "./components/ItemsNav/ItemsNav";
import UploadPdf from "./components/UploadPdf/UploadPdf";
import Home from "./components/Home/Home";
import Simulation from "./components/Simulation/Simulation";

import api from "./services/api";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [indexChat, setIndexChat] = useState(0);
  const [option, setOption] = useState("");
  const [selectedIdChat, setSelectedIdChat] = useState(0);
  const [chats, setChats] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSend = async () => {
    const newChats = [...chats];
    newChats[indexChat].messages.push({ role: "user", content: inputValue });
    setChats(newChats);
    setInputValue("");
    await api
      .post(`/api/thread/${selectedIdChat}/send_message`, {
        prompt: inputValue,
      })
      .then((res) => {
        const newChatsRes = [...chats];
        newChatsRes[indexChat].messages.push({
          role: "assistant",
          content: res.data.response,
        });
        setChats(newChatsRes);
      });
  };

  const handleNewChat = async () => {
    await api.post("/api/thread").then((res) => {
      console.log("res", res);
      setChats((prev) => {
        const newChats = [...prev];
        newChats.push({
          id: res.data.thread_id,
          name: `Chat ${newChats.length + 1}`,
          messages: [],
        });
        return newChats;
      });
    });
  };

  const handleSendPDF = async () => {
    await api
      .post(`/api/file/analyze`, {
        file: JSON.stringify(selectedFile),
      })
      .then((res) => {
        console.log("res", res);
      });
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Central IA</span>
          </div>
          <button
            className="midBtn"
            disabled={option !== "chat"}
            onClick={() => handleNewChat()}
          >
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          {option === "chat" && (
            <Chats
              chats={chats}
              indexChat={indexChat}
              setIndexChat={setIndexChat}
              setSelectedIdChat={setSelectedIdChat}
            />
          )}
        </div>
        <ItemsNav setOption={setOption} />
      </div>
      <div className="main">
        {option === "home" ? (
          <Home />
        ) : option === "upload" ? (
          <UploadPdf
            handleSendPDF={handleSendPDF}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        ) : option === "chat" ? (
          <Messagens
            chats={chats}
            indexChat={indexChat}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSend={() => handleSend()}
          />
        ) : (
          <Simulation></Simulation>
        )}
      </div>
    </div>
  );
};

export default App;
