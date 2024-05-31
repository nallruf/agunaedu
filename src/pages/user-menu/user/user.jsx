import React from "react";
import Sidebar from "../../../components/user-menu/sidebar/sidebar";

const User = ({ content }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>{content}</div>
    </div>
  );
};

export default User;
