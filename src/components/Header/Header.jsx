import React from "react";
import {
  Menu,
  Search,
  NotificationsNone,
  KeyboardArrowDown,
} from "@mui/icons-material";
import "./Header.css";

const Header = ({ onMenuClick }) => {
  return (
    <header className="admin-header">
      <button className="header-menu-btn" onClick={onMenuClick}>
        <Menu />
      </button>

      <div className="header-search">
        <Search />
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <NotificationsNone />
          <span>2</span>
        </button>

        <div className="admin-profile">
          <div className="profile-avatar">A</div>
          <span>Admin</span>
          <KeyboardArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;