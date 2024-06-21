import React, { useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { dataTransactionAdmin as originaldataTransactionAdmin } from "../../../dummydata/user-menu/datatransaction";
import { IoMenu } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
const TransaksiDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const columnsTransactionAdmin = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "", field: "checkbox", truncate: 0 },
    { header: "Kelas", field: "class", truncate: 50 },
    { header: "ID Pembelian", field: "purchaseId", truncate: 50 },
    { header: "Tanggal", field: "tgl", truncate: 20 },
    { header: "Deadline", field: "deadline", truncate: 20 },
    { header: "Harga Kelas", field: "price", truncate: 50 },
    { header: "Status", field: "status", truncate: 50 },
    { header: "Struk Pembayaran", field: "image", truncate: 0 },
  ];
  const dataTransactionAdminWithImages = originaldataTransactionAdmin.map(
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
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Transaksi"
          desc="Pengaturan Transaksi "
        />

        <div className="px-10 sm:px-20 md:px-40 mt-5 my-10">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiSearch className="h-6 w-6 text-iconInput" />
              </div>
              <input
                type="text"
                placeholder="Cari"
                name="search"
                id="search"
                className="w-full border border-borderPrimary rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm pl-10"
              />
            </div>
            <button className="px-4 py-2 border border-borderPrimary rounded-[8px] bg-white text-textPrimary flex items-center">
              <IoMenu />
              <span className="ml-2 font-semibold">Filters</span>
            </button>
          </div>
          <TableDashboard
            columns={columnsTransactionAdmin}
            data={dataTransactionAdminWithImages}
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
        </div>
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default TransaksiDashboard;
