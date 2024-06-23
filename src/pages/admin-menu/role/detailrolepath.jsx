import React, { useState, useRef } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { dataRolePath as initialDataRolePath } from "../../../dummydata/admin-menu/role/datarolepath";
import { dataPathFocus as initialDataPathFocus } from "../../../dummydata/admin-menu/role/datapathfocus";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import ImgTrash from "../../../assets/img/illustration/trash.png";

const DetailRolePath = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedPath, setSelectedPath] = useState(null);
  const [newPath, setNewPath] = useState({
    name: "",
    image: "",
    description: "",
  });
  const imagePicker = useRef(null);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setNewPath({ name: "", image: "", description: "" });
  };

  const handleOpenEditModal = (rowData) => {
    setSelectedPath(rowData);
    setIsEditModalVisible(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
    setSelectedPath(null);
  };

  const handleOpenDeleteModal = (rowData) => {
    setSelectedPath(rowData);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedPath(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedPath((prevPath) => ({ ...prevPath, [name]: value }));
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewPath((prevPath) => ({ ...prevPath, [name]: value }));
  };

  const handleImageChange = (image) => {
    setSelectedPath((prevPath) => ({ ...prevPath, image }));
  };

  const handleNewImageChange = (image) => {
    setNewPath((prevPath) => ({ ...prevPath, image }));
  };

  const handleEditSubmit = () => {
    console.log("Edited Path:", selectedPath);
    // Add your logic to save the edited path here
    handleCloseEditModal();
  };

  const handleDelete = () => {
    console.log("Deleted Path:", selectedPath);
    // Add your logic to delete the path here
    handleCloseDeleteModal();
  };

  const handleNewSubmit = () => {
    console.log("New Path:", newPath);
    // Add your logic to save the new path here
    handleCloseModal();
  };

  const columnsDetailRolePath = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "title", truncate: 20 },
    { header: "Deskripsi", field: "desc", truncate: 50 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const columnsDetailPathFocus = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "title", truncate: 50 },
    { header: "Deskripsi", field: "desc", truncate: 50 },
    { header: "Gambar Header", field: "image", truncate: 0 },
  ];

  const dataRolePath = initialDataRolePath.map((path) => ({
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

  const dataPathFocus = initialDataPathFocus.map((path) => ({
    ...path,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
      </div>
    ),
  }));

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Detail Path"
          desc="Web Development"
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <TitleDashboard
            title="Web Development"
            desc="Path : Web Development"
          />

          <TableDashboard columns={columnsDetailRolePath} data={dataRolePath} />
          <TitleDashboard
            title="Path Focus"
            desc="Jumlah Path Focus : 3"
            button="Tambah Path Focus"
            onButtonClick={handleOpenModal}
          />
          <TableDashboard
            columns={columnsDetailPathFocus}
            data={dataPathFocus}
            detailRoute={"/admin/role/detail/path/focus"}
          />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title="Tambah Path"
      >
        <form className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="mr-3 w-1/2">
              <TextInputComponent
                htmlfor="namaPath"
                label="Nama Path"
                type="text"
                id="namaPath"
                name="name"
                value={newPath.name}
                onChange={handleNewInputChange}
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
                onImageChange={handleNewImageChange}
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
            name="description"
            value={newPath.description}
            onChange={handleNewInputChange}
            type="textarea"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNewSubmit}
              className="b  g-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isVisible={isEditModalVisible}
        onClose={handleCloseEditModal}
        title="Edit Path"
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
            <div>
              <button
                type="button"
                onClick={handleEditSubmit}
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
        <div className="p-10 space-y-4 text-center">
          <img className="mx-auto" src={ImgTrash} alt="Trash" />
          <p className="font-semibold">Hapus Role</p>
          <p>
            Apakah Anda yakin ingin menghapus role{" "}
            <span className="font-semibold">{selectedPath?.title}</span>?
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Hapus
            </button>
            <button
              type="button"
              onClick={handleCloseDeleteModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default DetailRolePath;
