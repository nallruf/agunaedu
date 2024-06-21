import React, { useEffect, useState } from "react";
import User from "./user/user";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { dataTransaction as originalDataTransaction } from "../../dummydata/user-menu/datatransaction";
import { FiUploadCloud } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import TableDashboard from "../../components/admin-menu/tabledashboard/tabledashboard";
import ImgProfile from "../../assets/img/team/ulum.png";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const columnsTransaction = [
  { header: "", field: "checkbox", truncate: 0 },
  { header: "Kelas", field: "class", truncate: 50 },
  { header: "ID Pembelian", field: "purchaseId", truncate: 50 },
  { header: "Harga Kelas", field: "price", truncate: 50 },
  { header: "Status", field: "status", truncate: 50 },
  { header: "Struk Pembayaran", field: "image", truncate: 0 },
  { header: "Aksi", field: "icon", truncate: 0 },
];

const dataTransactionWithImages = originalDataTransaction.map(
  (transaction) => ({
    ...transaction,
    checkbox: <input type="checkbox" className="form-checkbox" />,
    class: (
      <div className="flex items-center gap-2">
        <img
          src={transaction.img}
          alt={transaction.class}
          className="w-8 h-8 rounded-full"
        />
        <span>{transaction.class}</span>
      </div>
    ),
  })
);

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

      <TableDashboard
        columns={columnsTransaction}
        data={dataTransactionWithImages}
      />

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
