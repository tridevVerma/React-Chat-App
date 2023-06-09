import React from "react";
import { StyledSidebar } from "../styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 *
 * @param {Array} recentContacts List of recent chats of logged user
 * @param {Function} showModal show modal
 * @returns {JSX}
 */
const Sidebar = ({ recentContacts, showModal }) => {
  // navigator hook --> to manipulate history or change url
  const navigate = useNavigate();

  // Get current logged user data from redux store
  const loggedUser = useSelector((state) => state.loggedUser.value);

  return (
    <StyledSidebar>
      <div className="user-info">
        <div className="profile-image">
          <img src={loggedUser.image} alt="profile-pic" />
        </div>
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
            <button>
              <i className="fa-solid fa-users"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="search-box">
        <form action="" method="get" spellCheck="false">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search or start new chat..." />
        </form>
      </div>

      <div className="recent-chats">
        <ul>
          {recentContacts.map((contact) => {
            return (
              <li key={contact.id}>
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
