import React, { useEffect } from "react";
import User from "./user/user";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { dataTransaction } from "../../dummydata/user-menu/datatransaction";
import { FiUploadCloud } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { LuMinusSquare } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";

const TransactionUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Transaction User";
  }, []);

  const content = (
    <>
      <div className="flex flex-col gap-2 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h1 className="text-textPrimary font-semibold text-lg sm:text-xl">
                Transaksi
              </h1>
              <div className="rounded-full font-medium text-sm bg-[#D2E9FF] text-textSecondary px-2">
                20 Transaksi
              </div>
            </div>
            <span className="text-textTertiary font-semibold">
              Data lengkap transaksi anda
            </span>
          </div>
          <div className="sm:mt-0 sm:ml-auto font-semibold">
            <button className="bg-white text-textPrimary border-2 border-borderPrimary py-2 px-4 rounded-lg flex items-center gap-2">
              <FiUploadCloud />
              Import
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 flex-wrap gap-4">
        <div className="flex flex-wrap">
          <button className="px-4 py-2 bg-white border text-textLabel font-semibold rounded-l-xl">
            Semua
          </button>
          <button className="px-4 py-2 bg-white border text-textLabel font-semibold">
            Sudah Bayar
          </button>
          <button className="px-4 py-2 bg-white border text-textLabel font-semibold rounded-r-xl">
            Dibatalkan
          </button>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="h-6 w-6 text-iconInput" />
            </div>
            <input
              type="text"
              placeholder="Cari"
              name="search"
              id="search"
              className="w-full sm:w-64 border border-borderPrimary rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm pl-10"
            />
          </div>
          <button className="px-4 py-2 border border-borderPrimary rounded-[8px] bg-white text-textPrimary flex items-center">
            <IoMenu />
            <span className="ml-2 font-semibold">Filters</span>
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <div className="overflow-auto">
          <table className="w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-left text-textTertiary">
                  <div className="flex items-center pl-1 gap-2">
                    <LuMinusSquare className="text-primaryBlue" />
                    Kelas
                    <FaArrowDown className="ml-2 text-textTertiary" />
                  </div>
                </th>
                <th className="py-2 px-4 text-left text-textTertiary">
                  ID Pembelian
                </th>
                <th className="py-2 px-4 text-left text-textTertiary">
                  Harga Kelas
                </th>
                <th className="py-2 px-4 text-left text-textTertiary">
                  Status
                </th>
                <th className="py-2 px-4 text-left text-textTertiary">
                  Struk Pembayaran
                </th>
                <th className="py-2 px-4 text-left text-textTertiary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dataTransaction.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 px-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div className="flex items-center gap-2">
                        <img
                          src={transaction.img}
                          alt="profile"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div>{transaction.class}</div>
                          <div className="text-gray-500 text-sm">
                            {transaction.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-textTertiary whitespace-nowrap">
                    {transaction.purchaseId}
                  </td>
                  <td className="py-2 px-4 text-textTertiary whitespace-nowrap">
                    {transaction.price}
                  </td>
                  <td className="py-2 px-1.5 text-textTertiary whitespace-nowrap">
                    <span
                      className={`font-medium rounded-full px-4 py-1 text-sm uppercase tracking-wider ${transaction.statusColor}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                    Lihat
                  </td>
                  <td className="py-2 px-4 text-center my-auto flex items-center gap-2 text-textTertiary whitespace-nowrap">
                    <HiTrash className="cursor-pointer" />
                    <HiOutlinePencil className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 px-4">
        <div className="text-sm">Halaman 1 dari 10</div>
        <div className="mt-2 sm:mt-0">
          <button className="ml-0 sm:ml-4 px-4 py-2 text-sm border border-borderPrimary rounded-xl text-textPrimary bg-white hover:bg-gray-100">
            Sebelumnya
          </button>
          <button className="ml-2 px-4 py-2 text-sm border border-borderPrimary rounded-xl text-textPrimary bg-white hover:bg-gray-100">
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default TransactionUserPage;
