import React from "react";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { CiLaptop } from "react-icons/ci";

const RenderEvent = ({ event }) => (
  <div
    key={event.eventId}
    className="border-2 rounded-xl px-4 md:px-8 py-6 border-[#EAECF0] mt-4"
  >
    <div className="flex flex-col md:flex-row items-center gap-4">
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/images/${event.imageUrl}`}
        alt="img-profile"
        draggable="false"
        className="w-full h-24 object-cover md:w-20 md:h-16 rounded-md"
      />
      <div className="flex flex-col w-full">
        <h2 className="text-sm font-semibold text-textLabel">
          {event.eventName}
        </h2>
        <div className="flex justify-between flex-wrap md:flex-nowrap w-full mt-2">
          <div className="flex items-center gap-2 text-textPrimary font-semibold">
            <FiUsers />
            <h4 className="text-xs text-textPrimary font-medium">
              {event.organizer}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-textPrimary font-semibold">
            <FiCalendar />
            <h4 className="text-xs text-textPrimary font-medium">
              {new Date(event.date).toLocaleDateString()}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-textPrimary font-semibold">
            <GoClock />
            <h4 className="text-xs text-textPrimary font-medium">
              {event.time}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-textPrimary font-semibold">
            <CiLaptop />
            <h4 className="text-xs text-textPrimary font-medium">
              {event.type === "ONLINE" ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium"
                >
                  Online
                </a>
              ) : (
                "Offline"
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RenderEvent;
