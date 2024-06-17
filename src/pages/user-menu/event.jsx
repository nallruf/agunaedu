import React, { useEffect, useState } from "react";
import User from "./user/user";
import RenderEvent from "../../components/user-menu/event/renderevent";
import { useAuth } from "../../hooks/useauth";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";

const EventUserPage = () => {
  const { user } = useAuth();
  const [futureEvents, setFutureEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);

  useEffect(() => {
    document.title = "Aguna Edu | Event User";
  }, []);

  useEffect(() => {
    const fetchFutureEvents = async () => {
      try {
        const response = await axios.get("/api/v1/user/event/future", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setFutureEvents(response.data);
      } catch (error) {
        console.error("Error fetching future events", error);
      }
    };

    const fetchFinishedEvents = async () => {
      try {
        const response = await axios.get("/api/v1/user/event/finish", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setFinishedEvents(response.data);
      } catch (error) {
        console.error("Error fetching finished events", error);
      }
    };

    if (user) {
      fetchFutureEvents();
      fetchFinishedEvents();
    }
  }, [user]);

  const noEvents = futureEvents.length === 0 && finishedEvents.length === 0;

  const content = (
    <>
      {noEvents ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <BiSearchAlt className="text-secondaryBlue" size={60} />
          <h1 className="text-xl font-semibold mt-4">
            Kamu Belum Mengikuti Event Apapun :(
          </h1>
        </div>
      ) : (
        <div className="border-2 border-[#EAECF0] rounded-lg py-8 px-2 md:px-10 md:w-3/4 w-full">
          <div className="flex flex-col gap-[6px] mt-4">
            <h1 className="text-2xl font-semibold text-textPrimary">
              Akan Datang
            </h1>
            <h2 className="text-textPrimary">Event yang akan datang</h2>
            {futureEvents.length > 0 ? (
              futureEvents.map((event) => (
                <RenderEvent key={event.eventId} event={event} />
              ))
            ) : (
              <p className="text-textPrimary">
                Tidak ada event yang akan datang
              </p>
            )}

            <h1 className="text-2xl font-semibold text-textPrimary mt-8">
              Selesai
            </h1>
            <h2 className="text-textPrimary">Event yang sudah selesai</h2>
            {finishedEvents.length > 0 ? (
              finishedEvents.map((event) => (
                <RenderEvent key={event.eventId} event={event} />
              ))
            ) : (
              <p className="text-textPrimary">
                Tidak ada event yang sudah selesai
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );

  return <User content={content} />;
};

export default EventUserPage;
