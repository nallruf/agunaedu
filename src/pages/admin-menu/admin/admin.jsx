import React from "react";
import Sidebar from "../../../components/admin-menu/sidebar/sidebar";

const Admin = ({ content }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 overflow-auto ">
        {content}
      </div>
    </div>
  );
};

export default Admin;
