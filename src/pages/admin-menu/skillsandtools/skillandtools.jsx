import React, { useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";

const SkillandToolsDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Detail Skill & Tools"
          desc="Skill & Tools  "
        />
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default SkillandToolsDashboard;
