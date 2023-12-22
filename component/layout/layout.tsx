import React, { useState } from "react";
import SideBar from "./sideBar";
import NavbarComponent from "./navbar";

function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <SideBar sidebarOpen={sidebarOpen} />
      <div className="flex-1">
        <NavbarComponent toggleSidebar={toggleSidebar} />
        <div className="px-5 pb-4 ">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
