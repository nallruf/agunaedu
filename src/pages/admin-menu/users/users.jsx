import React, { useEffect } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import { dataUsers as originaldataUsers } from "../../../dummydata/admin-menu/user/datauser";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const UsersDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const columnsUsers = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "", field: "checkbox", truncate: 0 },
    { header: "Pengguna", field: "name", truncate: 50 },
    { header: "Jumlah Kelas", field: "jmlkls", truncate: 50 },
    { header: "Jumlah Event", field: "jmlevent", truncate: 50 },
    { header: "Jumlah Challenge", field: "jmlchallenge", truncate: 50 },
    { header: "Transaksi", field: "transaction", truncate: 20 },
  ];
  const dataUsersWithImages = originaldataUsers.map((users) => ({
    ...users,
    checkbox: <input type="checkbox" className="form-checkbox" />,
    class: (
      <div className="flex items-center gap-2">
        <img
          src={users.img}
          alt={users.name}
          className="w-8 h-8 rounded-full"
        />
        <span>{users.class}</span>
      </div>
    ),
  }));
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Pengguna"
          desc="Pengaturan Pengguna"
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
          <TableDashboard columns={columnsUsers} data={dataUsersWithImages} />
        </div>
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default UsersDashboard;
