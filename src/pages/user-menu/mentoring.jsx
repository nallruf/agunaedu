import React, { useEffect } from "react";
import User from "./user/user";

const MentoringUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Mentoring User";
  }, []);

  const content = (
    <>
      <div className="flex text-primaryBlue font-semibold ">Mentoring</div>
    </>
  );

  return <User content={content} />;
};

export default MentoringUserPage;
