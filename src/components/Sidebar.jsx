import React, { useState, useEffect } from "react";
import { StyledSidebar } from "../styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 *
 * @param {Array} recentContacts List of recent chats of logged user
 * @param {Function} showModal show modal
 * @returns {JSX}
 */
const Sidebar = ({ recentContacts, showModal, showThemeModal }) => {
  // navigator hook --> to manipulate history or change url
  const navigate = useNavigate();

  // Get current logged user data from redux store
  const loggedUser = useSelector((state) => state.loggedUser.value);

  // state to manage filtering of recent chats by name of the freind
  const [searchContact, setSearchContact] = useState("");

  // state to managge current filtered list of recent chats
  const [filteredList, setFilteredList] = useState(recentContacts);

  function handleContactSelect(e) {
    document.querySelectorAll(".recent-chats > ul > li").forEach((contact) => {
      contact.classList.remove("contact-selected");
    });
    e.currentTarget.classList.add("contact-selected");
  }

  useEffect(() => {
    if (searchContact.length > 0) {
      // if search box has atleast one character --> filter recentContact by freind name
      setFilteredList(
        recentContacts.filter((contact) => {
          return contact.firstname
            .toLowerCase()
            .includes(searchContact.toLowerCase());
        })
      );
    } else {
      // else show all recent chats
      setFilteredList(recentContacts);
    }
  }, [searchContact, recentContacts]);

  return (
    <StyledSidebar>
      <div className="user-info">
        <div className="profile-image">
          <img src={loggedUser.image} alt="profile-pic" />
        </div>
        <p>
          {loggedUser.firstname} {loggedUser.lastname}
        </p>
        <ul>
          <li>
            <button onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </li>
          <li>
            <button onClick={showModal}>
              <i className="fas fa-plus"></i>
            </button>
          </li>
          <li>
            <button onClick={showThemeModal}>
              <i className="fa-solid fa-palette"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search or start new chat..."
          value={searchContact}
          onChange={(e) => setSearchContact(e.target.value)}
        />
      </div>

      <div className="recent-chats">
        <ul>
          {filteredList.map((contact) => {
            return (
              <li key={contact.id} onClick={handleContactSelect}>
                <NavLink to={`/conversation/${contact.id}`}>
                  <div className="profile-image">
                    <img src={contact.image} alt={contact.firstname} />
                  </div>
                  <div className="content">
                    <h4>
                      {contact.firstname} {contact.lastname}
                    </h4>
                    <small>
                      {
                        contact.conversation[contact.conversation.length - 1]
                          .content
                      }
                    </small>
                  </div>

                  <div className="status">
                    <small>
                      {
                        contact.conversation[contact.conversation.length - 1]
                          .time
                      }
                    </small>
                    <span className={contact.active ? "active" : ""}></span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
