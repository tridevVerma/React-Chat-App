import React, { useState, useEffect } from "react";
import { StyledSidebar } from "../styles";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    async function getRecentContacts() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/tridevVerma/React-Chat-App/users"
        );
        setRecentContacts(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getRecentContacts();
  }, []);

  return (
    <StyledSidebar>
      <div className="user-info">
        <div className="profile-image">
          <img src="https://robohash.org/namquaerataut.png" alt="profile-pic" />
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-users"></i>
          </li>
          <li>
            <i className="fa-solid fa-house"></i>
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
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
                    <small>Hey!! whats going on ?</small>
                  </div>

                  <div className="status">
                    <small>10:12</small>
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
