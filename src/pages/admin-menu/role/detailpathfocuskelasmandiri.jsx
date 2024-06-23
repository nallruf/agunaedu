import React, { useState, useRef } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import DropdownComponent from "../../../components/admin-menu/dropdowncomponent/dropdowncomponent";
import MultiSelectComponent from "../../../components/auth/multipleinput";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  dataDetailFocusKelasMandiri,
  dataMateriKelasMandiri,
  dataMentorKelasMandiri,
} from "../../../dummydata/admin-menu/role/datadetailfokuskelasmandiri";

const DetailPathFocusKelasMandiri = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddMentorModalVisible, setIsAddMentorModalVisible] = useState(false);
  const [isEditMateriModalVisible, setIsEditMateriModalVisible] =
    useState(false);
  const [isAddMateriModalVisible, setIsAddMateriModalVisible] = useState(false);
  const [isDeleteMateriModalVisible, setIsDeleteMateriModalVisible] =
    useState(false);
  const [selectedKelas, setSelectedKelas] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedMateri, setSelectedMateri] = useState(null);
  const imagePicker = useRef(null);
  const [isDeleteMentorModalVisible, setIsDeleteMentorModalVisible] =
    useState(false);

  const handleOpenEditModal = (rowData) => {
    setSelectedKelas(rowData);
    setIsEditModalVisible(true);
  };

  const handleOpenEditMateriModal = (materiData) => {
    setSelectedMateri(materiData);
    setIsEditMateriModalVisible(true);
  };

  const handleOpenAddMentorModal = () => {
    setIsAddMentorModalVisible(true);
  };

  const handleOpenAddMateriModal = () => {
    setIsAddMateriModalVisible(true);
  };

  const handleOpenDeleteMateriModal = (materiData) => {
    setSelectedMateri(materiData);
    setIsDeleteMateriModalVisible(true);
  };

  const handleModalClose = () => {
    setIsEditModalVisible(false);
    setIsAddMentorModalVisible(false);
    setIsEditMateriModalVisible(false);
    setIsAddMateriModalVisible(false);
    setIsDeleteMateriModalVisible(false);
    setSelectedKelas(null);
    setSelectedMentor(null);
    setSelectedMateri(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedKelas((prevKelas) => ({ ...prevKelas, [name]: value }));
  };

  const handleImageChange = (image) => {
    setSelectedKelas((prevKelas) => ({ ...prevKelas, image }));
  };

  const handleSkillChange = (selectedSkills) => {
    setSelectedKelas((prevKelas) => ({ ...prevKelas, skill: selectedSkills }));
  };
  const handleOpenDeleteMentorModal = (mentorData) => {
    setSelectedMentor(mentorData);
    setIsDeleteMentorModalVisible(true);
  };

  const handleMentorChange = (e) => {
    const { value } = e.target;
    setSelectedMentor(value);
  };

  const handleMateriInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedMateri((prevMateri) => ({ ...prevMateri, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Edited Kelas:", selectedKelas);
    // Add your logic to save the edited class here
    handleModalClose();
  };

  const handleMentorSubmit = () => {
    console.log("Added Mentor:", selectedMentor);
    // Add your logic to add the mentor here
    handleModalClose();
  };

  const handleMateriSubmit = () => {
    console.log("Edited Materi:", selectedMateri);
    // Add your logic to save the edited material here
    handleModalClose();
  };
  const handleDeleteMentor = () => {
    console.log("Deleted Mentor:", selectedMentor);
    // Tambahkan logika penghapusan mentor di sini
    handleModalClose();
  };

  const handleDeleteMateri = () => {
    console.log("Deleted Materi:", selectedMateri);
    // Add your logic to delete the material here
    handleModalClose();
  };

  const handleChangeLink = () => {
    // Add your logic to change the link here
    console.log("Change link clicked");
  };

  const columnsDetailPathFocus = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "title", truncate: 50 },
    { header: "Deskripsi", field: "desc", truncate: 50 },
    { header: "Harga", field: "price", truncate: 20 },
    { header: "Level", field: "level", truncate: 20 },
    { header: "Mentor", field: "mentor", truncate: 20 },
    { header: "Metode", field: "metode", truncate: 20 },
    { header: "Tools", field: "tools", truncate: 20 },
    { header: "Skill", field: "skill", truncate: 20 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const dataDetailFocus = dataDetailFocusKelasMandiri.map((kelas) => ({
    ...kelas,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(kelas)}
        />
      </div>
    ),
  }));
  const dataMentor = dataMentorKelasMandiri.map((mentor) => ({
    ...mentor,
    icon: (
      <FaRegTrashAlt
        className="text-red-500"
        onClick={() => handleOpenDeleteMentorModal(mentor)}
      />
    ),
  }));

  const columnsMentorKelasMandiri = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "name", truncate: 20 },
    { header: "Tentang Mentor", field: "aboutmentor", truncate: 20 },
    { header: "Keahlian", field: "skills", truncate: 20 },
    { header: "Review", field: "review", truncate: 20 },
    { header: "Pekerjaan", field: "work", truncate: 20 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const columnsMateriKelasMandiri = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "name", truncate: 20 },
    { header: "Link Video", field: "video", truncate: 20 },
    { header: "Link PDF", field: "pdf", truncate: 20 },
  ];

  const dataMateri = dataMateriKelasMandiri.map((materi) => ({
    ...materi,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditMateriModal(materi)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteMateriModal(materi)}
        />
      </div>
    ),
  }));

  const skillOptions = [
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JavaScript", value: "javascript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
  ];

  const levelOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ];

  const mentorOptions = dataMentorKelasMandiri.map((mentor) => ({
    label: mentor.name,
    value: mentor.name,
  }));

  const metodeOptions = [
    { label: "Video", value: "video" },
    { label: "Teks", value: "teks" },
    { label: "Video & Teks", value: "video_teks" },
  ];

  const content = (
    <>
      <HeaderDashboard
        buttonBack="Kembali"
        title="Detail Kelas Mandiri"
        desc="Front-End Web dengan JS"
      />
      <div className="px-10 sm:px-20 md:px-40 my-10">
        <TitleDashboard
          title="Front End Web dengan Js"
          desc="Kelas Mandiri: Front End Web dengan Js"
        />
        <TableDashboard
          columns={columnsDetailPathFocus}
          data={dataDetailFocus}
        />

        <TitleDashboard
          title="Mentor Kelas Mandiri"
          button="Tambah Mentor"
          onButtonClick={handleOpenAddMentorModal}
        />
        <TableDashboard columns={columnsMentorKelasMandiri} data={dataMentor} />

        <TitleDashboard
          title="Materi Kelas"
          button="Tambah Materi"
          onButtonClick={handleOpenAddMateriModal}
        />
        <TableDashboard columns={columnsMateriKelasMandiri} data={dataMateri} />
      </div>

      <Modal
        isVisible={isEditModalVisible}
        title="Edit Kelas"
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        submitLabel="Simpan"
      >
        {selectedKelas && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="mr-3 w-1/2">
                <TextInputComponent
                  label="Nama"
                  name="title"
                  value={selectedKelas.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2">
                <InputImgComponent
                  ref={imagePicker}
                  label="Upload Image"
                  name="image"
                  onChange={handleImageChange}
                  currentImage={selectedKelas.image}
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
              label="Deskripsi"
              name="desc"
              value={selectedKelas.desc}
              onChange={handleInputChange}
            />
            <TextInputComponent
              label="Harga"
              name="price"
              value={selectedKelas.price}
              onChange={handleInputChange}
            />
            <DropdownComponent
              label="Level"
              options={levelOptions}
              selectedValue={selectedKelas.level}
              onChange={handleInputChange}
              name="level"
            />
            <DropdownComponent
              label="Mentor"
              options={mentorOptions}
              selectedValue={selectedKelas.mentor}
              onChange={handleInputChange}
              name="mentor"
            />
            <DropdownComponent
              label="Metode"
              options={metodeOptions}
              selectedValue={selectedKelas.metode}
              onChange={handleInputChange}
              name="metode"
            />
            <TextInputComponent
              label="Tools"
              name="tools"
              value={selectedKelas.tools}
              onChange={handleInputChange}
            />
            <MultiSelectComponent
              label="Skill"
              options={skillOptions}
              selectedValues={selectedKelas.skill}
              onChange={handleSkillChange}
            />
          </div>
        )}
        <button
          type="button"
          className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
        >
          Simpan
        </button>
      </Modal>

      <Modal
        isVisible={isAddMentorModalVisible}
        title="Tambah Mentor"
        onClose={handleModalClose}
        onSubmit={handleMentorSubmit}
        submitLabel="Tambah"
      >
        <div className="flex flex-col gap-4">
          <DropdownComponent
            label="Pilih Mentor"
            options={mentorOptions}
            selectedValue={selectedMentor}
            onChange={handleMentorChange}
          />
        </div>
        <button
          type="button"
          className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
        >
          Tambah Mentor
        </button>
      </Modal>

      <Modal
        isVisible={isEditMateriModalVisible}
        title="Edit Materi"
        onClose={handleModalClose}
        onSubmit={handleMateriSubmit}
        submitLabel="Simpan"
      >
        {selectedMateri && (
          <div className="flex flex-col gap-4">
            <TextInputComponent
              label="Nama"
              name="name"
              value={selectedMateri.name}
              onChange={handleMateriInputChange}
            />

            <div className="flex gap-4">
              <div className="w-1/2">
                <TextInputComponent
                  label="Link Video"
                  name="video"
                  value={selectedMateri.video}
                  onChange={handleMateriInputChange}
                />
              </div>
              <div className="w-1/2 flex items-end">
                <button
                  type="button"
                  onClick={handleChangeLink}
                  className="w-full border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                >
                  Ganti Link
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <TextInputComponent
                  label="Link PDF"
                  name="pdf"
                  value={selectedMateri.pdf}
                  onChange={handleMateriInputChange}
                />
              </div>
              <div className="w-1/2 flex items-end">
                <button
                  type="button"
                  onClick={handleChangeLink}
                  className="w-full border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                >
                  Ganti Link
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
              >
                Simpan
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isVisible={isAddMateriModalVisible}
        title="Tambah Materi"
        onClose={handleModalClose}
        onSubmit={handleMateriSubmit}
        submitLabel="Tambah"
      >
        <div className="  items-center">
          <TextInputComponent
            label="Nama"
            name="name"
            value={selectedMateri?.name || ""}
            onChange={handleMateriInputChange}
          />

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <TextInputComponent
                label="Link Video"
                name="video"
                value={selectedMateri?.video || ""}
                onChange={handleMateriInputChange}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <button
                type="button"
                onClick={handleChangeLink}
                className="flex items-center justify-center w-full h-full border font-semibold py-2 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
              >
                Ganti Link
              </button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-1">
              <TextInputComponent
                label="Link PDF"
                name="pdf"
                value={selectedMateri?.pdf || ""}
                onChange={handleMateriInputChange}
                className="w-full"
              />
            </div>
            <div className="flex-1 mt-4">
              <button
                type="button"
                onClick={handleChangeLink}
                className="flex items-center justify-center w-full border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
              >
                Ganti Link
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
            >
              Tambah Materi
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isVisible={isDeleteMateriModalVisible}
        title="Hapus Materi"
        onClose={handleModalClose}
        onSubmit={handleDeleteMateri}
        submitLabel="Hapus"
      >
        <div className="p-10 space-y-4 text-center">
          <FaRegTrashAlt className="mx-auto text-red-500" size={50} />
          <p className="font-semibold">Hapus Materi</p>
          <p>
            Apakah Anda yakin ingin menghapus materi{" "}
            <span className="font-semibold">{selectedMateri?.name}</span>?
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={handleDeleteMateri}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Hapus
            </button>
            <button
              type="button"
              onClick={handleModalClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Batal
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isDeleteMentorModalVisible}
        onClose={handleModalClose}
        title="Hapus Mentor"
        onSubmit={handleDeleteMentor}
      >
        <p>Apakah Anda yakin ingin menghapus mentor ini?</p>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default DetailPathFocusKelasMandiri;
