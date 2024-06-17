import React, { useEffect } from "react";
import Admin from "./admin/admin";
import HeaderDashboard from "../../components/admin-menu/headerdashboard/headerdashboard";
const MentorDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Mentor"
          desc="Pengaturan Mentor "
        />
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default MentorDashboard;
