import React, { useEffect } from "react";
import User from "./user/user";
import { DataEvent } from "../../dummydata/user-menu/dataevent";
import RenderEvent from "../../components/user-menu/event/renderevent";

const EventUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Event User";
  }, []);

  const content = (
    <>
      <div className="border-2 border-[#EAECF0] rounded-lg py-8 px-2 md:px-10 md:w-3/4 w-full">
        {DataEvent.map(RenderEvent)}
        <div className="flex flex-col gap-[6px] mt-4">
          <h1 className="text-2xl font-semibold text-textPrimary">
            Akan Datang
          </h1>
          <h2 className="text-textPrimary">Event yang akan datang</h2>
          {DataEvent.map(RenderEvent)}
          <h1 className="text-2xl font-semibold text-textPrimary">Selesai</h1>
          <h2 className="text-textPrimary">Event yang sudah selesai</h2>
          {DataEvent.map(RenderEvent)}
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default EventUserPage;
