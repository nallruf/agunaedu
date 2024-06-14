import React, { useState, useEffect } from "react";
import Admin from "../admin/admin";
import TitleDashboard from "../../../components/admin-menu/title/title";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import AddChallenge from "../../../components/admin-menu/addchallenge/addchallenge";
import TableDashboardChallenge from "../../../components/admin-menu/tabledashboard/tabledashboardchallenge";
const ChallengeDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const [showAddChallenge, setShowAddChallenge] = useState(false);
  const handleAddChallengeClick = () => {
    setShowAddChallenge(true);
  };
  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/course/hacker/path-web/fe"
          buttonBack="Kembali"
          title="Challenge"
          desc="Pengaturan Challenge"
        />
      </div>
      <div className="px-10 sm:px-20 md:px-40">
        <TitleDashboard
          title="Challenge"
          desc="Jumlah Challenge Berlangsung : 5"
          button="Tambah Challenge"
          onClick={handleAddChallengeClick}
        />
        <AddChallenge
          isVisible={showAddChallenge}
          onClose={() => setShowAddChallnge(false)}
        />

        <TableDashboardChallenge
          th1="Aksi"
          th2="Nama challenge"
          th3="Durasi"
          th4="Tag"
          th5="Gambar"
        />
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default ChallengeDashboard;
