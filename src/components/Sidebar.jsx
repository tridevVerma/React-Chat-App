import React from "react";
import { StyledSidebar } from "../styles";

const Sidebar = () => {
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
          <li>
            <div className="profile-image">
              <img src="https://robohash.org/impeditautest.png" alt="" />
            </div>
            <div className="content">
              <h4>Tridev Verma</h4>
              <small>Hey!! whats going on ?</small>
            </div>

            <div className="status">
              <small>10:12</small>
              <span className="active"></span>
            </div>
          </li>
          <li>
            <div className="profile-image">
              <img src="https://robohash.org/cupiditatererumquos.png" alt="" />
            </div>
            <div className="content">
              <h4>Saurav Verma</h4>
              <small>
                Hii Everyone !! sdkfjsldkfj lksdjflkjsdlkfs sdflkjsdlkfjsdkfdsf
                sdf sd f
              </small>
            </div>

            <div className="status">
              <small>10:40</small>
              <span className=""></span>
            </div>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
