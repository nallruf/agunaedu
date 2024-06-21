import React, { useState, useRef } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import { datamainskillntools } from "../../../dummydata/admin-menu/skillntools/datamainskillntools";
import { dataSkill } from "../../../dummydata/admin-menu/skillntools/dataskill";
import ImgTrash from "../../../assets/img/illustration/trash.png";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const DetailSkillandTools = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddToolModalVisible, setIsAddToolModalVisible] = useState(false);
  const [isEditToolModalVisible, setIsEditToolModalVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [newTool, setNewTool] = useState({ name: "", desc: "" });
  const imagePicker = useRef(null);

  const handleEditClick = (skill) => {
    setSelectedSkill(skill);
    setIsEditModalVisible(true);
  };

  const handleDeleteClick = (skill) => {
    setSelectedSkill(skill);
    setIsDeleteModalVisible(true);
  };

  const handleAddToolClick = () => {
    setNewTool({ name: "", desc: "" });
    setIsAddToolModalVisible(true);
  };

  const handleEditToolClick = (tool) => {
    setSelectedTool(tool);
    setIsEditToolModalVisible(true);
  };

  const handleModalClose = () => {
    setIsEditModalVisible(false);
    setSelectedSkill(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedSkill(null);
  };

  const handleCloseAddToolModal = () => {
    setIsAddToolModalVisible(false);
  };

  const handleCloseEditToolModal = () => {
    setIsEditToolModalVisible(false);
    setSelectedTool(null);
  };

  const handleSaveEditSkill = () => {
    console.log("Edited Skill: ", selectedSkill);
    // Add logic to save the edited skill
    handleModalClose();
  };

  const handleDelete = () => {
    console.log("Deleted Skill: ", selectedSkill);
    // Add logic to delete the skill
    handleCloseDeleteModal();
  };

  const handleSaveNewTool = () => {
    console.log("New Tool: ", newTool);
    // Add logic to save the new tool
    handleCloseAddToolModal();
  };

  const handleSaveEditTool = () => {
    console.log("Edited Tool: ", selectedTool);
    // Add logic to save the edited tool
    handleCloseEditToolModal();
  };

  const handleChangeEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Add logic to handle file upload
      console.log("File selected: ", file);
    }
  };

  const columnsmainSkill = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Skill", field: "skill", truncate: 20 },
  ];

  const columnsSkill = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "tools", truncate: 20 },
    { header: "Deskripsi", field: "desc", truncate: 20 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const dataSkillWithActions = dataSkill.map((tool) => ({
    ...tool,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleEditToolClick(tool)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleDeleteClick(tool)}
        />
      </div>
    ),
  }));

  const datamainskillntoolsWithActions = datamainskillntools.map((skill) => ({
    ...skill,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleEditClick(skill)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleDeleteClick(skill)}
        />
      </div>
    ),
  }));

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Detail Skill & Tools"
          desc="Skill & Tools"
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <TitleDashboard title="Skill" />
          <TableDashboard
            columns={columnsmainSkill}
            data={datamainskillntoolsWithActions}
          />

          <TitleDashboard
            title="Tools Pembelajaran"
            desc="Jumlah Tools : 6"
            button="Tambah Tools"
            onButtonClick={handleAddToolClick}
          />
          <TableDashboard columns={columnsSkill} data={dataSkillWithActions} />
        </div>
      </div>

      <Modal
        isVisible={isEditModalVisible}
        onClose={handleModalClose}
        title="Edit Skill"
      >
        <div>
          <TextInputComponent
            htmlfor="skillName"
            label="Nama Skill"
            type="text"
            id="skillName"
            name="skillName"
            value={selectedSkill?.skill || ""}
            onChange={(e) =>
              setSelectedSkill({ ...selectedSkill, skill: e.target.value })
            }
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleSaveEditSkill}
              className="bg-primaryBlue w-full text-white px-4 py-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={isDeleteModalVisible}
        onClose={handleCloseDeleteModal}
        title="Hapus Skill"
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <img src={ImgTrash} alt="delete illustration" />
          <h3 className="text-lg text-center">
            Apakah anda yakin ingin menghapus skill {selectedSkill?.skill}?
          </h3>
          <div className="flex gap-5 w-full justify-center">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg"
              onClick={handleDelete}
            >
              Hapus
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={isAddToolModalVisible}
        onClose={handleCloseAddToolModal}
        title="Tambah Tool"
      >
        <div>
          <TextInputComponent
            htmlfor="toolName"
            label="Nama Tool"
            type="text"
            id="toolName"
            name="toolName"
            value={newTool.name}
            onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
          />
          <TextInputComponent
            htmlfor="toolDesc"
            label="Deskripsi Tool"
            type="text"
            id="toolDesc"
            name="toolDesc"
            value={newTool.desc}
            onChange={(e) => setNewTool({ ...newTool, desc: e.target.value })}
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleSaveNewTool}
              className="bg-primaryBlue w-full text-white px-4 py-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={isEditToolModalVisible}
        onClose={handleCloseEditToolModal}
        title="Edit Tool"
      >
        <>
          <div className="flex justify-between items-center gap-5">
            <div className="w-1/2">
              <TextInputComponent
                htmlfor="toolName"
                label="Nama Tool"
                type="text"
                id="toolName"
                name="toolName"
                value={selectedTool?.tools || ""}
                onChange={(e) =>
                  setSelectedTool({ ...selectedTool, tools: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <InputImgComponent
                htmlfor="gambar"
                label="Gambar"
                type="file"
                id="gambar"
                name="gambar"
                ref={imagePicker}
                onChange={handleChangeEdit}
              />
              <div
                onClick={() => imagePicker.current.click()}
                className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer mt-2"
              >
                Tambah Foto
              </div>
            </div>
          </div>

          <TextInputComponent
            htmlfor="toolDesc"
            label="Deskripsi Tool"
            type="text"
            id="toolDesc"
            name="toolDesc"
            value={selectedTool?.desc || ""}
            onChange={(e) =>
              setSelectedTool({ ...selectedTool, desc: e.target.value })
            }
          />
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleSaveEditTool}
              className="bg-primaryBlue w-full text-white px-4 py-2 rounded-md"
            >
              Simpan
            </button>
          </div>
        </>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default DetailSkillandTools;
