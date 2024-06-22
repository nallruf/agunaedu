import React from "react";
import SidebarMaterial from "../../components/user-menu/material/sidebarmaterial";
import UserMaterial from "../../pages/user-menu/usermaterial/usermaterial";

const MaterialPage = () => {
  const content = (
    <div className="p-4">
      <p className="text-lg font-bold">Material</p>
    </div>
  );
  return <UserMaterial content={content} />;
};

export default MaterialPage;
