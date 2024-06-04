import React from "react";
import Sidebar from "../../../components/user-menu/sidebar/sidebar";

const User = ({ content }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mx-8 md:mx-10 my-[35px] transition-all duration-300">
        {content}
      </div>
    </div>
  );
};

export default User;
