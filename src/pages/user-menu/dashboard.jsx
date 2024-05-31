import React, { useEffect } from "react";
import User from "./user/user";

const DashboardUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const content = (
    <>
      <div className="flex text-primaryBlue font-semibold ">Dashboard</div>
    </>
  );

  return <User content={content} />;
};

export default DashboardUserPage;
