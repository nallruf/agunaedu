import React, { useState, useEffect } from "react";
import Admin from "../admin/admin";
import TitleDashboard from "../../../components/admin-menu/title/title";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import AddChallenge from "../../../components/admin-menu/addchallenge/addchallenge";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import { dataChallenge } from "../../../dummydata/admin-menu/datachallenge";

const ChallengeDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const [showAddChallenge, setShowAddChallenge] = useState(false);

  const handleAddChallengeClick = () => {
    setShowAddChallenge(true);
  };

  const columnsChallenge = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama challenge", field: "title", truncate: 20 },
    { header: "Durasi", field: "durasi", truncate: 20 },
    { header: "Tag", field: "tag", truncate: 10 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

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
        <div className="mb-10">
          <TableDashboard
            columns={columnsChallenge}
            data={dataChallenge}
            detailRoute="/admin/challenge/detail"
          />
        </div>
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default ChallengeDashboard;
