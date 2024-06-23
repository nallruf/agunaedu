import React, { useState, useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import { dataSkillnTools } from "../../../dummydata/admin-menu/skillntools/dataskillntools";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";

const SkillandToolsDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const handleAddSkillClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setNewSkill("");
  };

  const handleSaveSkill = () => {
    console.log("New Skill: ", newSkill);
    // Add logic to save the new skill
    handleModalClose();
  };

  const columnsmainSkill = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Skill", field: "skill", truncate: 20 },
  ];

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Skill & Tools"
          desc="Skill & Tools  "
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <TitleDashboard
            title="Skill "
            desc="Jumlah Skill : 6"
            button="Tambah Skill"
            onButtonClick={handleAddSkillClick}
          />
          <TableDashboard
            columns={columnsmainSkill}
            data={dataSkillnTools}
            detailRoute="/admin/skillandtools/detail"
          />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        title="Tambah Skill"
      >
        <div>
          <TextInputComponent
            htmlfor="skillName"
            label="Nama Skill"
            type="text"
            id="skillName"
            name="skillName"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleSaveSkill}
              className="bg-primaryBlue text-white w-full px-4 py-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </div>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default SkillandToolsDashboard;
