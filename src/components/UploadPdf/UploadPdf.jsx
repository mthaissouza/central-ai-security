import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import sendBtn from "../../assets/imgs/send.svg";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadPdf = (props) => {
  const { handleSendPDF, selectedFile, setSelectedFile } = props;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  return (
    <div className="chatFooter">
      <div className="inp">
        {selectedFile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "80%",
              marginRight: "2rem",
            }}
          >
            <p>{selectedFile.name}</p>
            <button className="close-button" onClick={handleFileRemove}>
              X
            </button>
          </div>
        ) : (
          <input
            type="text"
            placeholder="Insira um Pdf para validação"
            disabled
          />
        )}

        {selectedFile ? (
          <button className="send" onClick={() => handleSendPDF()}>
            <img src={sendBtn} alt="Send" />
          </button>
        ) : (
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadPdf;
