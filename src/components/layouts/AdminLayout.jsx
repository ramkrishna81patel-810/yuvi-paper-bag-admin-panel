import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./AdminLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="admin-layout">
      <div className={sidebarOpen ? "sidebar-wrapper" : "sidebar-wrapper closed"}>
        <Sidebar />
      </div>

      <div className={`admin-main ${sidebarOpen ? "" : "expanded"}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;