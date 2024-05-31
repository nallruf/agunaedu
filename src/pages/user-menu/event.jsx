import React, { useEffect } from "react";
import User from "./user/user";

const EventUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Event User";
  }, []);

  const content = (
    <>
      <div className="flex text-primaryBlue font-semibold ">Event</div>
    </>
  );

  return <User content={content} />;
};

export default EventUserPage;
