import React from "react";
import { useNavigate } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const TableDashboard = ({ columns, data, detailRoute }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
      <div className="overflow-auto">
        <table className="w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-2 px-4 text-left text-textTertiary"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-4 px-4 text-textTertiary whitespace-nowrap"
                  >
                    {col.field === "icon" ? (
                      <div
                        onClick={() => navigate(detailRoute)}
                        className="text-primaryBlue cursor-pointer"
                      >
                        {item[col.field]}
                      </div>
                    ) : col.field === "image" ? (
                      <div className="flex items-center">
                        <div>
                          {item[col.field] &&
                            truncateText(item[col.field], col.truncate)}
                        </div>

                        <div className="border border-secondaryBlue flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                          Lihat
                        </div>
                      </div>
                    ) : (
                      <div>
                        {item[col.field] &&
                          truncateText(item[col.field], col.truncate)}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboard;
