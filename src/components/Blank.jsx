import React from "react";
import { StyledBlank } from "../styles";

const Blank = () => {
  // Render routes other than conversation routes
  return (
    <StyledBlank>
      <div className="img-container">
        <img src={require("../images/chat.png")} alt="chat-icon" />
      </div>
      <div className="text">
        <h3>React Chat App</h3>
        <p>Send / Receive Message real fast with total security ^_^</p>
      </div>
    </StyledBlank>
  );
};

export default Blank;
