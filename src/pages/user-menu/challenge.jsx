import React, { useEffect } from "react";
import User from "./user/user";

const ChallengeUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Challenge User";
  }, []);

  const content = (
    <>
      <div className="flex text-primaryBlue font-semibold ">Challenge</div>
    </>
  );

  return <User content={content} />;
};

export default ChallengeUserPage;
