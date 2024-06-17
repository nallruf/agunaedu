import React, { useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";

const RoleDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Role"
          desc="Pengaturan Role "
        />
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default RoleDashboard;
