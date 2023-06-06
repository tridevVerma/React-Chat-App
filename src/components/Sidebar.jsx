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
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search or start new chat..." />
        </form>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
