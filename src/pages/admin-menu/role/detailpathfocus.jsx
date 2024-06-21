import React, { useState, useRef } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { dataDetailPathFocus as initialDataDetailPathFocus } from "../../../dummydata/admin-menu/role/datadetailpathfocus";
import { dataDetailPathFocusMandiri as initialDataDetailPathFocusMandiri } from "../../../dummydata/admin-menu/role/detailpathfocusmandiri";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import DropdownComponent from "../../../components/admin-menu/dropdowncomponent/dropdowncomponent";
import MultiSelectComponent from "../../../components/auth/multipleinput";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import ImgTrash from "../../../assets/img/illustration/trash.png";

const DetailPathFocus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false); // State for add modal
  const [selectedPath, setSelectedPath] = useState(null);
  const [newCourse, setNewCourse] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    level: "",
    mentor: "",
    metode: "",
    skill: [],
  });

  const imagePicker = useRef(null);

  const handleOpenEditModal = (rowData) => {
    setSelectedPath(rowData);
    setIsModalVisible(true);
  };

  const handleOpenDeleteModal = (rowData) => {
    setSelectedPath(rowData);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedPath(null);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedPath(null);
  };

  const handleOpenAddModal = () => {
    setIsAddModalVisible(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalVisible(false);
    setNewCourse({
      nama: "",
      deskripsi: "",
      harga: "",
      level: "",
      mentor: "",
      metode: "",
      skill: [],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedPath((prevPath) => ({ ...prevPath, [name]: value }));
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleImageChange = (image) => {
    setSelectedPath((prevPath) => ({ ...prevPath, image }));
    setNewCourse((prevCourse) => ({ ...prevCourse, image }));
  };

  const handleSkillChange = (selectedSkills) => {
    setNewCourse((prevCourse) => ({ ...prevCourse, skill: selectedSkills }));
  };

  const handleSubmit = () => {
    console.log("Edited Path:", selectedPath);
    // Add your logic to save the edited path here
    handleModalClose();
  };

  const handleAddCourse = () => {
    console.log("New Course:", newCourse);
    // Add your logic to save the new course here
    handleCloseAddModal();
  };

  const handleDelete = () => {
    console.log("Deleted Path:", selectedPath);
    // Add your logic to delete the path here
    handleCloseDeleteModal();
  };

  const columnsDetailPathFocus = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "title", truncate: 50 },
    { header: "Deskripsi", field: "desc", truncate: 50 },
    { header: "Gambar Header", field: "image", truncate: 0 },
  ];

  const columnsDetailPathFocusMandiri = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "title", truncate: 20 },
    { header: "Deskripsi", field: "desc", truncate: 20 },
    { header: "Harga", field: "price", truncate: 20 },
    { header: "Level", field: "level", truncate: 20 },
    { header: "Mentor", field: "mentor", truncate: 20 },
    { header: "Metode", field: "metode", truncate: 20 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const dataDetailPathFocus = initialDataDetailPathFocus.map((path) => ({
    ...path,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(path)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(path)}
        />
      </div>
    ),
  }));

  const dataDetailPathFocusMandiri = initialDataDetailPathFocusMandiri.map(
    (path) => ({
      ...path,
      icon: (
        <div className="flex gap-2 cursor-pointer">
          <LuPencil className="text-primaryBlue" />
        </div>
      ),
    })
  );

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

  const mentorOptions = [
    { label: "John Doe", value: "john_doe" },
    { label: "Jane Smith", value: "jane_smith" },
  ];

  const metodeOptions = [
    { label: "Video", value: "video" },
    { label: "Teks", value: "teks" },
    { label: "Video & Teks", value: "video_teks" },
  ];

  const content = (
    <>
      <HeaderDashboard
        goto="/admin/role"
        buttonBack="Kembali"
        title="Detail Path Focus"
        desc="Front-End Web Development"
      />
      <div className="px-10 sm:px-20 md:px-40 my-10">
        <TitleDashboard
          title="Front-End Web Development"
          desc="Path Focus: Front-End Web Development"
        />
        <TableDashboard
          columns={columnsDetailPathFocus}
          data={dataDetailPathFocus}
        />
        <TitleDashboard
          title="Kelas Mandiri"
          desc="Jumlah Kelas Mandiri: 6"
          button="Tambah Kelas"
          onButtonClick={handleOpenAddModal}
        />
        <TableDashboard
          columns={columnsDetailPathFocusMandiri}
          data={dataDetailPathFocusMandiri}
          detailRoute="/admin/role/detail/path/focus/kelasmandiri"
        />
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        title="Edit Path Focus"
      >
        {selectedPath && (
          <form className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="mr-3 w-1/2">
                <TextInputComponent
                  htmlfor="namaPath"
                  label="Nama Path"
                  type="text"
                  id="namaPath"
                  name="title"
                  value={selectedPath.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2">
                <InputImgComponent
                  htmlfor="namaGambar"
                  label="Gambar"
                  type="file"
                  id="namaGambar"
                  name="image"
                  imagePicker={imagePicker}
                  onImageChange={handleImageChange}
                />
                <div
                  onClick={() => imagePicker.current.click()}
                  className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                >
                  Tambah Foto
                </div>
              </div>
            </div>
            <TextInputComponent
              htmlfor="deskripsi"
              label="Deskripsi"
              name="desc"
              value={selectedPath.desc}
              onChange={handleInputChange}
              type="textarea"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
              >
                Simpan
              </button>
            </div>
          </form>
        )}
      </Modal>
      <Modal
        isVisible={isDeleteModalVisible}
        onClose={handleCloseDeleteModal}
        title="Hapus Role"
      >
        <div className="text-center justify-center flex flex-col gap-4">
          <img src={ImgTrash} alt="delete" className="mx-auto" />
          <div>
            <p className="text-textPrimary font-bold mt-6">
              Apakah anda yakin akan menghapus role ini?
            </p>
            <p className="text-textTertiary text-sm">
              Kamu akan menghapus seluruh data terkait dengan tabel ini
            </p>
          </div>
          <div className="flex justify-around mt-6">
            <button
              onClick={handleCloseDeleteModal}
              className="bg-gray-300 text-black px-6 py-3 rounded-lg"
            >
              Batal
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-6 py-3 rounded-lg"
            >
              Hapus
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isVisible={isAddModalVisible}
        onClose={handleCloseAddModal}
        title="Tambah Kelas Mandiri"
      >
        <form className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="mr-3 w-1/2">
              <TextInputComponent
                htmlfor="namaKelas"
                label="Nama Kelas"
                type="text"
                id="namaKelas"
                name="nama"
                value={newCourse.nama}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <InputImgComponent
                htmlfor="namaGambar"
                label="Gambar"
                type="file"
                id="namaGambar"
                name="image"
                imagePicker={imagePicker}
                onImageChange={handleImageChange}
              />
              <div
                onClick={() => imagePicker.current.click()}
                className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
              >
                Tambah Foto
              </div>
            </div>
          </div>
          <TextInputComponent
            htmlfor="descKelas"
            label="Deskripsi Kelas"
            type="text"
            id="descKelas"
            name="deskripsi"
            value={newCourse.deskripsi}
            onChange={handleInputChange}
          />
          <TextInputComponent
            htmlfor="hargaKelas"
            label="Harga Kelas"
            type="text"
            id="hargaKelas"
            name="harga"
            value={newCourse.harga}
            onChange={handleInputChange}
          />
          <DropdownComponent
            htmlfor="levelKelas"
            label="Level Kelas"
            id="levelKelas"
            name="level"
            options={levelOptions}
            value={newCourse.level}
            onChange={handleInputChange}
          />
          <DropdownComponent
            htmlfor="mentorKelas"
            label="Mentor Kelas"
            id="mentorKelas"
            name="mentor"
            options={mentorOptions}
            value={newCourse.mentor}
            onChange={handleInputChange}
          />
          <DropdownComponent
            htmlfor="metodeKelas"
            label="Metode Kelas"
            id="metodeKelas"
            name="metode"
            options={metodeOptions}
            value={newCourse.metode}
            onChange={handleInputChange}
          />
          <MultiSelectComponent
            htmlfor="skillKelas"
            label="Skill yang Diajarkan"
            id="skillKelas"
            name="skill"
            options={skillOptions}
            value={newCourse.skill}
            onChange={handleSkillChange}
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAddCourse}
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
            >
              Tambah Kelas
            </button>
          </div>
        </form>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default DetailPathFocus;
