import React from "react";
import { StyledModal } from "../styles";
import { NavLink } from "react-router-dom";

/**
 *
 * @param {Array} allContacts List of all contacts of logged user
 * @param {Function} open current state of modal
 * @param {Function} hideModal closes modal
 * @returns {JSX}
 */
const AllContactsModal = ({ allContacts, open, hideModal }) => {
  return (
    <StyledModal open={open}>
      <div className="heading">
        <h4>Select freind to chat 🙂</h4>
      </div>
      <ul>
        {allContacts.map((contact) => {
          return (
            <li key={contact.id} onClick={hideModal}>
              <NavLink to={`/conversation/${contact.id}`}>
                <div className="profile-image">
                  <img src={contact.image} alt={contact.firstname} />
                </div>
                <div className="content">
                  <h4>
                    {contact.firstname} {contact.lastname}
                  </h4>
                  <small>
                    {contact.conversation?.length > 0
                      ? "Continue Chat"
                      : "Start a new conversation"}
                  </small>
                </div>
                <button>
                  <i className="fa-solid fa-comments"></i>
                </button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledModal>
  );
};

export default AllContactsModal;
