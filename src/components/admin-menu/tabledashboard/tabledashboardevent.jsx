import React from "react";
import { useNavigate } from "react-router-dom";
import { dataEvent } from "../../../dummydata/admin-menu/dataevent";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
const TableDashboardEvent = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
      <div className="overflow-auto">
        <table className="w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-left text-textTertiary">Aksi</th>
              <th className="py-2 px-4 text-left text-textTertiary">
                Nama Event
              </th>
              <th className="py-2 px-4 text-left text-textTertiary">
                Deskripsi
              </th>
              <th className="py-2 px-4 text-left text-textTertiary">Waktu</th>
              <th className="py-2 px-4 text-left text-textTertiary">Tanggal</th>
              <th className="py-2 px-4 text-left text-textTertiary">Tag</th>
              <th className="py-2 px-4 text-left text-textTertiary">Gambar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataEvent.map((event) => (
              <tr key={event.id} className="border-b">
                <td className="py-4 px-4 whitespace-nowrap">
                  <div
                    onClick={() => navigate("/admin/event/detail")}
                    className="text-primaryBlue cursor-pointer"
                  >
                    {event.icon}
                  </div>
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                  {truncateText(event.title, 15)}
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap ">
                  {truncateText(event.desc, 20)}
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                  {event.time}
                </td>
                <td className="py-4 px-1.5 text-textTertiary whitespace-nowrap">
                  {event.date}
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                  {truncateText(event.tag, 10)}
                </td>
                <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                  <div className="border border-secondaryBlue flex  bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                    Lihat
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboardEvent;
