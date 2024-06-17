import React, { useEffect } from "react";
import Admin from "../admin/admin";

const UserSettingDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const content = (
    <>
      <div>aaaaaa</div>
    </>
  );
  return <Admin content={content} />;
};

export default UserSettingDashboard;
