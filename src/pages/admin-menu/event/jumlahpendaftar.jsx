import React, { useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard ";

const JumlahPendaftar = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Jumlah Pendaftar"
          desc="Data Jumlah Pendaftar Event Berlangsung "
        />
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default JumlahPendaftar;
