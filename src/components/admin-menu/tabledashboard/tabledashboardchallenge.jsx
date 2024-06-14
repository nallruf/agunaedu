import React from "react";
import { useNavigate } from "react-router-dom";
import { dataChallenge } from "../../../dummydata/admin-menu/datachallenge";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
const TableDashboardChallenge = ({ th1, th2, th3, th4, th5 }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
      <div className="overflow-auto">
        <table className="w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-left text-textTertiary">{th1}</th>
              <th className="py-2 px-4 text-left text-textTertiary">{th2}</th>
              <th className="py-2 px-4 text-left text-textTertiary">{th3}</th>
              <th className="py-2 px-4 text-left text-textTertiary">{th4}</th>

              <th className="py-2 px-4 text-left text-textTertiary">{th5}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataChallenge.map((challenge) => (
              <tr key={challenge.id} className="border-b">
                <td className="py-4 px-4 whitespace-nowrap">
                  <div
                    onClick={() => navigate("/admin/challenge/detail")}
                    className="text-primaryBlue cursor-pointer"
                  >
                    {challenge.icon}
                  </div>
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                  {challenge.title && truncateText(challenge.title, 15)}
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap ">
                  {challenge.durasi && truncateText(challenge.durasi, 20)}
                </td>
                <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                  {challenge.tag && truncateText(challenge.tag, 10)}
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

export default TableDashboardChallenge;
