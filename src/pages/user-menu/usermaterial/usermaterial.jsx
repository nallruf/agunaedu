import React from "react";
import SidebarMaterial from "../../../components/user-menu/material/sidebarmaterial";

const UserMaterial = ({ content }) => {
  return (
    <div className="flex">
      <SidebarMaterial />
      <div className="flex-1 mx-8 md:mx-10 my-[35px] transition-all duration-300 overflow-x-auto">
        {content}
      </div>
    </div>
  );
};

export default UserMaterial;
