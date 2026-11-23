import React from "react";
import {
  Dashboard,
  Inventory2,
  Description,
  Chat,
  Settings,
  Logout,
  ShoppingBag,
  PeopleAlt, Web
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";


const menuItems = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <Dashboard /> },
  { title: "Products", path: "/admin/products", icon: <Inventory2 /> },
  { title: "Customers", path: "/admin/customers", icon: <PeopleAlt /> },
  { title: "Quote Requests", path: "/admin/quotes", icon: <Description /> },
  { title: "Contact Inquiries", path: "/admin/inquiries", icon: <Chat /> },
  { title: "Website Content", path: "/admin/website-content", icon: <Web /> },
  { title: "Settings", path: "/admin/settings", icon: <Settings /> },
];


const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <ShoppingBag />
        </div>
        <div>
          <h3>Yuvi</h3>
          <span>Paper Bag</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-logout">
        <button onClick={() => console.log("Logout clicked")}>
          <Logout />
          <span>Logout</span>
        </button>
      </div>

      <div className="sidebar-bottom">
        <ShoppingBag className="sidebar-bag-art" />
      </div>
    </aside>
  );
};

export default Sidebar;