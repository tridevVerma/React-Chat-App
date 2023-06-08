import React, { useState, useEffect } from "react";
import { StyledMain } from "../styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Main = () => {
  const freindID = useParams().id;
  const [freind, setFreind] = useState({});
  const [textMsg, setTextMsg] = useState("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  useEffect(() => {
    async function getFreindProfile() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/tridevVerma/React-Chat-App/users/" +
            freindID
        );
        setFreind(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getFreindProfile();
  }, [freindID]);

  function handleEmojiOpen() {
    setOpenEmojiPicker(true);
  }

  function handleEmojiClose() {
    setOpenEmojiPicker(false);
  }

  function handleEmojiSelect(e) {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTextMsg((currentText) => currentText + emoji);
  }

  return (
    <StyledMain open={openEmojiPicker} onClick={handleEmojiClose}>
      <div className="heading">
        <ul>
          <li className="img-container">
            <img src={freind.image} alt="profile-pic" />
          </li>
          <li>
            <h4>
              {freind.firstname} {freind.lastname}
            </h4>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-address-card"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="conversation-container"></div>

      <div className="footer">
        <button className="emoji" onMouseOver={handleEmojiOpen}>
          <i className="fa-solid fa-face-smile"></i>
        </button>
        <button>
          <i className="fa-solid fa-paperclip"></i>
        </button>
        <form action="/">
          <div className="emoji-picker">
            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
          </div>
          <input
            type="text"
            value={textMsg}
            onChange={(e) => setTextMsg(e.target.value)}
            placeholder="Type your message here ..."
          />
          <button type="submit">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </StyledMain>
  );
};

export default Main;
