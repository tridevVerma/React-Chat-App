import React, { useState, useEffect } from "react";
import { StyledMain } from "../styles";
import { useParams } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/contactSlice";

const Main = () => {
  // Dispatcher --> invokes action
  const dispatch = useDispatch();

  // Get freind id from url parameters
  const freindID = useParams().id;

  // get freind data from redux store with the freind id
  const freind = useSelector(
    (state) =>
      state.contacts.users.find(
        (contact) => contact.id.toString() === freindID
      ) || {}
  );

  // state to manage new message
  const [textMsg, setTextMsg] = useState("");

  // state to manage display status of emoji-picker
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  // get logged user data from redux state
  const loggedUser = useSelector((state) => state.loggedUser.value);

  useEffect(() => {
    const allMsg = document.querySelectorAll(".msg-box");
    const lastMsg = allMsg[allMsg.length - 1];
    if (lastMsg) {
      lastMsg.scrollIntoView(false);
    }
  }, [freind.conversation]);

  // show emoji-picker
  function handleEmojiOpen() {
    setOpenEmojiPicker(true);
  }

  // hide emoji-picker
  function handleEmojiClose() {
    setOpenEmojiPicker(false);
  }

  // select emoji and add it to message input box
  function handleEmojiSelect(e) {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTextMsg((currentText) => currentText + emoji);
  }

  // get current time from international date formatter
  function getCurrentTime() {
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formatter = new Intl.DateTimeFormat("en-IN", options);
    return formatter.format(date);
  }

  // Add new message
  function handleNewMessage(e) {
    e.preventDefault();
    dispatch(
      addMessage({
        freindID,
        user: loggedUser.id,
        content: textMsg,
        time: getCurrentTime(),
      })
    );
    setTextMsg("");
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

      <div className="conversation-container">
        {freind.conversation === undefined && (
          <div className="floating-msg">
            <p>Start Conversation...</p>
          </div>
        )}
        {freind.conversation?.map((message, index) => {
          return (
            <div
              key={index}
              className={
                loggedUser.id === message.user ? "msg-box me" : "msg-box"
              }
            >
              <p>
                {message.content}
                <span>
                  <i className="fas fa-clock"></i>
                  {message.time}
                </span>
              </p>
              <div className="sender-info">
                <small>
                  {loggedUser.id === message.user ? "You" : freind.firstname}
                </small>

                <div className="profile-img">
                  <img
                    src={
                      loggedUser.id === message.user
                        ? loggedUser.image
                        : freind.image
                    }
                    alt="profile-pic"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <button className="emoji" onMouseOver={handleEmojiOpen}>
          <i className="fa-solid fa-face-smile"></i>
        </button>
        <button>
          <i className="fa-solid fa-paperclip"></i>
        </button>
        <form onSubmit={handleNewMessage}>
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
