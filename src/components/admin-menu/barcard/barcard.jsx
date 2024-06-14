import React from "react";
import {
  transaksiData,
  penyelesaianData,
} from "../../../dummydata/admin-menu/databarcard";

const BarCard = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="border rounded-lg p-4 shadow-md flex-1">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Transaksi</h2>
            <span className="text-sm text-gray-500">Last 7 Days</span>
          </div>
          {transaksiData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span>{item.amount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border rounded-lg p-4 shadow-md flex-1">
        <div>
          <h2 className="text-lg font-semibold mb-4">Penyelesaian Kelas</h2>
          {penyelesaianData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarCard;
