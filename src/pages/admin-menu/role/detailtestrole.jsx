import React, { useState } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  dataDetailTesDasar,
  dataSoalTesDasar,
} from "../../../dummydata/admin-menu/role/datatesrole";

const columnsTestRole = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama", field: "title", truncate: 20 },
  { header: "Deskripsi", field: "desc", truncate: 20 },
  { header: "Skill", field: "skill", truncate: 20 },
  { header: "Durasi", field: "durasi", truncate: 20 },
];

const columnsSoalTest = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Soal", field: "question", truncate: 20 },
  { header: "Jawaban", field: "answer", truncate: 20 },
  { header: "Skor", field: "skor", truncate: 20 },
];

const DetailTestRolePage = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [formDataEdit, setFormDataEdit] = useState({
    title: "",
    desc: "",
    skill: "",
    durasi: "",
  });

  const handleOpenEditModal = (data) => {
    console.log("Opening edit modal with data:", data);
    setFormDataEdit(data);
    setIsEditModalVisible(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  const handleOpenDeleteModal = (data) => {
    console.log("Opening delete modal with data:", data);
    setFormDataEdit(data);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormDataEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formDataEdit);
    handleCloseEditModal();
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting item with data:", formDataEdit);
    handleCloseDeleteModal();
  };

  const dataDetailTesDasarWithActions = dataDetailTesDasar.map((test) => ({
    ...test,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(test)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(test)}
        />
      </div>
    ),
  }));

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto={() => console.log("Navigating back")}
          buttonBack="Kembali"
          title="Detail Test Dasar"
          desc="Pengaturan Test Dasar"
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <TitleDashboard title="Tes Dasar" desc="Detail Tes Dasar" />
          <TableDashboard
            columns={columnsTestRole}
            data={dataDetailTesDasarWithActions}
          />
          <TitleDashboard
            title="Soal "
            desc="Jumlah Soal"
            button="Tambah Soal"
          />
          <TableDashboard columns={columnsSoalTest} data={dataSoalTesDasar} />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Admin content={content} />
      <Modal
        isVisible={isEditModalVisible}
        onClose={handleCloseEditModal}
        title="Edit Tes Dasar"
      >
        <form onSubmit={handleSubmitEdit}>
          <div className="flex flex-col gap-5">
            <TextInputComponent
              htmlfor="title"
              label="Nama"
              type="text"
              id="title"
              name="title"
              value={formDataEdit.title}
              onChange={handleChangeEdit}
            />
            <TextInputComponent
              htmlfor="desc"
              label="Deskripsi"
              type="text"
              id="desc"
              name="desc"
              value={formDataEdit.desc}
              onChange={handleChangeEdit}
            />
            <TextInputComponent
              htmlfor="skill"
              label="Skill"
              type="text"
              id="skill"
              name="skill"
              value={formDataEdit.skill}
              onChange={handleChangeEdit}
            />
            <TextInputComponent
              htmlfor="durasi"
              label="Durasi"
              type="text"
              id="durasi"
              name="durasi"
              value={formDataEdit.durasi}
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
        title="Hapus Tes Dasar"
      >
        <div className="text-center">
          <p>Apakah anda yakin akan menghapus tes dasar ini?</p>
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

export default DetailTestRolePage;
