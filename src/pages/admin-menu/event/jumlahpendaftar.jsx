import React, { useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import { dataJumlahPendaftar } from "../../../dummydata/admin-menu/event/datajumlahpendaftar";
import TitleDashboard from "../../../components/admin-menu/title/title";

const JumlahPendaftar = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const columnsJumlahPendaftar = [
    { header: "Nama Event", field: "title", truncate: 40 },
    { header: "Jumlah Pendaftar", field: "total", truncate: 20 },
  ];
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Jumlah Pendaftar"
          desc="Data Jumlah Pendaftar Event Berlangsung "
        />
        <div className="px-10 sm:px-20 md:px-40 mt-5">
          <TitleDashboard title="Jumlah Pendaftar" />
          <TableDashboard
            columns={columnsJumlahPendaftar}
            data={dataJumlahPendaftar}
          />
        </div>
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default JumlahPendaftar;
