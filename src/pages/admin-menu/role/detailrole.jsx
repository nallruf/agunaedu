import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { dataMainRole } from "../../../dummydata/admin-menu/role/datamainrole";
import { dataPathRole } from "../../../dummydata/admin-menu/role/datapathrole";
import { dataTesRole } from "../../../dummydata/admin-menu/role/datatesrole";
import ImgTrash from "../../../assets/img/illustration/trash.png";

const columnsRole = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama", field: "role", truncate: 20 },
  { header: "Deskripsi", field: "desc", truncate: 20 },
  { header: "Jumlah Path", field: "jmlpath", truncate: 20 },
  { header: "Jumlah Path Focus", field: "jmlpathfocus", truncate: 20 },
  { header: "Jumlah Course", field: "jmlcourse", truncate: 20 },
  { header: "Jumlah Siswa", field: "jmlsiswa", truncate: 20 },
];

const columnsPathRole = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama", field: "title", truncate: 15 },
  { header: "Deskripsi", field: "desc", truncate: 50 },
  { header: "Gambar", field: "image", truncate: 0 },
];

const columnsTesRole = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama", field: "title", truncate: 20 },
  { header: "Deskripsi", field: "desc", truncate: 50 },
  { header: "Skill", field: "skill", truncate: 20 },
  { header: "Durasi", field: "durasi", truncate: 20 },
];

const DetailRoleDashboard = () => {
  const navigate = useNavigate();
  const [isPathModalVisible, setIsPathModalVisible] = useState(false);
  const [isTestModalVisible, setIsTestModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [formDataPath, setFormDataPath] = useState({
    namaEvent: "",
    namaGambar: "",
    deskripsiRole: "",
  });
  const [formDataTest, setFormDataTest] = useState({
    namaTes: "",
    deskripsiTes: "",
    skill: "",
    durasi: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    namaRole: "",
    deskripsiRole: "",
  });

  const imagePicker = useRef();

  const handleOpenPathModal = () => {
    setIsPathModalVisible(true);
  };

  const handleClosePathModal = () => {
    setIsPathModalVisible(false);
  };

  const handleOpenTestModal = () => {
    setIsTestModalVisible(true);
  };

  const handleCloseTestModal = () => {
    setIsTestModalVisible(false);
  };

  const handleOpenEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleChangePath = (e) => {
    const { name, value } = e.target;
    setFormDataPath((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeTest = (e) => {
    const { name, value } = e.target;
    setFormDataTest((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormDataEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitPath = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleClosePathModal();
  };

  const handleSubmitTest = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseTestModal();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseEditModal();
  };

  const handleDelete = () => {
    // Handle delete logic here
    handleCloseDeleteModal();
  };

  const dataMainRoleWithActions = dataMainRole.map((role) => ({
    ...role,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" onClick={handleOpenEditModal} />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={handleOpenDeleteModal}
        />
      </div>
    ),
  }));

  const content = (
    <div>
      <HeaderDashboard
        goto={() => navigate(-1)}
        buttonBack="Kembali"
        title="Detail Role"
        desc="Pengaturan Role"
      />
      <div className="px-10 sm:px-20 md:px-40 my-10">
        <TitleDashboard title="Role Hacker" desc="Detail Hacker" />
        <TableDashboard
          columns={columnsRole}
          data={dataMainRoleWithActions}
          detailRoute="/admin/role/detail"
        />
        <TitleDashboard
          title="Path"
          desc="Jumlah path: 3"
          button="Tambah Path"
          onButtonClick={handleOpenPathModal}
        />
        <TableDashboard
          columns={columnsPathRole}
          data={dataPathRole}
          detailRoute="/admin/role/detail/path"
        />
        <TitleDashboard
          title="Tes Dasar"
          desc="Jumlah Tes: 1"
          button="Tambah Tes"
          onButtonClick={handleOpenTestModal}
        />
        <TableDashboard
          columns={columnsTesRole}
          data={dataTesRole}
          detailRoute="/admin/role/detail/test"
        />
      </div>
    </div>
  );

  return (
    <>
      <Admin content={content} />
      <Modal
        isVisible={isPathModalVisible}
        onClose={handleClosePathModal}
        title="Tambah Path"
      >
        <form onSubmit={handleSubmitPath}>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="mr-3 w-1/2">
                <TextInputComponent
                  htmlfor="namaEvent"
                  label="Nama Event"
                  type="text"
                  id="namaEvent"
                  name="namaEvent"
                  value={formDataPath.namaPath}
                  onChange={handleChangePath}
                />
              </div>
              <div className="w-1/2">
                <InputImgComponent
                  htmlfor="namaGambar"
                  label="Gambar"
                  type="file"
                  id="namaGambar"
                  name="namaGambar"
                  imagePicker={imagePicker}
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
              htmlfor="deskripsiRole"
              label="Deskripsi Role"
              type="text"
              id="deskripsiRole"
              name="deskripsiRole"
              value={formDataPath.deskripsiRole}
              onChange={handleChangePath}
            />
          </div>
          <button
            type="submit"
            className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
          >
            Tambah
          </button>
        </form>
      </Modal>
      <Modal
        isVisible={isTestModalVisible}
        onClose={handleCloseTestModal}
        title="Tambah Tes"
      >
        <form onSubmit={handleSubmitTest}>
          <div className="flex flex-col gap-5">
            <TextInputComponent
              htmlfor="namaTes"
              label="Nama Tes"
              type="text"
              id="namaTes"
              name="namaTes"
              value={formDataTest.namaTes}
              onChange={handleChangeTest}
            />
            <TextInputComponent
              htmlfor="deskripsiTes"
              label="Deskripsi Tes"
              type="text"
              id="deskripsiTes"
              name="deskripsiTes"
              value={formDataTest.deskripsiTes}
              onChange={handleChangeTest}
            />
            <TextInputComponent
              htmlfor="skill"
              label="Skill"
              type="text"
              id="skill"
              name="skill"
              value={formDataTest.skill}
              onChange={handleChangeTest}
            />
            <TextInputComponent
              htmlfor="durasi"
              label="Durasi"
              type="text"
              id="durasi"
              name="durasi"
              value={formDataTest.durasi}
              onChange={handleChangeTest}
            />
          </div>
          <button
            type="submit"
            className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
          >
            Tambah
          </button>
        </form>
      </Modal>
      <Modal
        isVisible={isEditModalVisible}
        onClose={handleCloseEditModal}
        title="Edit Role"
      >
        <form onSubmit={handleSubmitEdit}>
          <div className="flex flex-col gap-5">
            <TextInputComponent
              htmlfor="namaRole"
              label="Nama Role"
              type="text"
              id="namaRole"
              name="namaRole"
              value={formDataEdit.namaRole}
              onChange={handleChangeEdit}
            />
            <TextInputComponent
              htmlfor="deskripsiRole"
              label="Deskripsi Role"
              type="text"
              id="deskripsiRole"
              name="deskripsiRole"
              value={formDataEdit.deskripsiRole}
              onChange={handleChangeEdit}
            />
          </div>
          <button
            type="submit"
            className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
          >
            Simpan
          </button>
        </form>
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
    </>
  );
};

export default DetailRoleDashboard;
