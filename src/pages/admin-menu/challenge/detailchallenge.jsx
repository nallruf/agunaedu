import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import MultiSelectInputComponent from "../../../components/auth/multipleinput";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { dataMainChallenge } from "../../../dummydata/admin-menu/challenge/datamainchallenge";
import { dataKontenChallenge } from "../../../dummydata/admin-menu/challenge/datakontenchallenge";
import { dataDetailSkor } from "../../../dummydata/admin-menu/challenge/datadetailskor";
import Admin from "../admin/admin";
import ImgTrash from "../../../assets/img/illustration/trash.png";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const columnsChallenge = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama Challenge", field: "title", truncate: 40 },
  { header: "Deskripsi Singkat", field: "desc", truncate: 40 },
  { header: "Deskripsi Detail", field: "descfull", truncate: 40 },
  { header: "Durasi", field: "durasi", truncate: 10 },
  { header: "Gambar", field: "image", truncate: 0 },
];
const columnsKontenChallenge = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama Challenge", field: "title", truncate: 20 },
  { header: "Tag", field: "tag", truncate: 20 },
  { header: "Sub Judul", field: "sub", truncate: 20 },
  { header: "Detail Challenge", field: "detail", truncate: 20 },
  { header: "Durasi", field: "durasi", truncate: 10 },
  { header: "Pemenang", field: "winner", truncate: 10 },
  { header: "Gambar", field: "image", truncate: 0 },
];
const columnsSkorChallenge = [
  { header: "Aksi", field: "icon" },
  { header: "Skor Peserta", field: "skorpeserta" },
  { header: "Skor Juara", field: "skorjuara" },
];

const DetailChallenge = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formDataEdit, setFormDataEdit] = useState({
    namaChallenge: "",
    deskripsi: "",
    deskripsiDetail: "",
    durasi: "",
    gambar: null,
  });
  const [itemToDelete, setItemToDelete] = useState(null);

  const imagePicker = useRef();

  const handleOpenEditModal = (
    challengeData,
    isContent = false,
    isDetail = false
  ) => {
    if (isContent) {
      setModalTitle("Edit Konten Challenge");
      setFormDataEdit({
        namaChallenge: challengeData.title,
        deskripsi: challengeData.desc,
        subJudul: challengeData.sub,
        durasi: challengeData.durasi,
        winner: challengeData.winner || "",
        gambar: challengeData.image || null,
      });
    } else if (isDetail) {
      setModalTitle("Edit Detail Skor");
      setFormDataEdit({
        skorPeserta: challengeData.skorpeserta,
        skorJuara: challengeData.skorjuara,
      });
    } else {
      setModalTitle("Edit Challenge");
      setFormDataEdit({
        namaChallenge: challengeData.title,
        deskripsi: challengeData.desc,
        deskripsiDetail: challengeData.descfull,
        durasi: challengeData.durasi,
        gambar: challengeData.image || null,
      });
    }
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setItemToDelete(null);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting item:", itemToDelete);
    handleCloseDeleteModal();
  };

  const handleChangeEdit = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormDataEdit((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormDataEdit((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formDataEdit);
    handleCloseModal();
  };

  const dataMainChallengeWithActions = dataMainChallenge.map((challenge) => ({
    ...challenge,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(challenge)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(challenge)}
        />
      </div>
    ),
  }));

  const dataKontenChallengeWithActions = dataKontenChallenge.map((content) => ({
    ...content,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(content, true)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(content)}
        />
      </div>
    ),
  }));

  const dataDetailSkorWithActions = dataDetailSkor.map((detail) => ({
    ...detail,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenEditModal(detail, false, true)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(detail)}
        />
      </div>
    ),
  }));

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto={() => navigate(-1)}
          buttonBack="Kembali"
          title="Detail Challenge"
          desc="Mobile App dengan Flutter"
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <div className="flex flex-col gap-10">
            <div>
              <TitleDashboard title="Challenge : Mobile App dengan Flutter" />
              <TableDashboard
                columns={columnsChallenge}
                data={dataMainChallengeWithActions}
              />
            </div>
            <div>
              <TitleDashboard title="Konten Challenge" />
              <TableDashboard
                columns={columnsKontenChallenge}
                data={dataKontenChallengeWithActions}
              />
            </div>
            <div>
              <TitleDashboard title="Detail Skor" />
              <TableDashboard
                columns={columnsSkorChallenge}
                data={dataDetailSkorWithActions}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        <form onSubmit={handleSubmitEdit}>
          <div className="flex flex-col gap-5">
            {modalTitle === "Edit Detail Skor" ? (
              <>
                <TextInputComponent
                  htmlfor="skorPeserta"
                  label="Skor Peserta"
                  type="text"
                  id="skorPeserta"
                  name="skorPeserta"
                  value={formDataEdit.skorPeserta}
                  onChange={handleChangeEdit}
                />
                <TextInputComponent
                  htmlfor="skorJuara"
                  label="Skor Juara"
                  type="text"
                  id="skorJuara"
                  name="skorJuara"
                  value={formDataEdit.skorJuara}
                  onChange={handleChangeEdit}
                />
              </>
            ) : modalTitle === "Edit Konten Challenge" ? (
              <>
                <div className="flex justify-between items-center gap-5">
                  <div className="mr-3 w-1/2">
                    <TextInputComponent
                      htmlfor="namaChallenge"
                      label="Nama Challenge"
                      type="text"
                      id="namaChallenge"
                      name="namaChallenge"
                      value={formDataEdit.namaChallenge}
                      onChange={handleChangeEdit}
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
                      className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                    >
                      Tambah Foto
                    </div>
                  </div>
                </div>
                <TextInputComponent
                  htmlfor="subJudul"
                  label="Sub Judul"
                  type="text"
                  id="subJudul"
                  name="subJudul"
                  value={formDataEdit.subJudul}
                  onChange={handleChangeEdit}
                />
                <MultiSelectInputComponent
                  htmlfor="tag"
                  label="Tag"
                  id="tag"
                  name="tag"
                  value={formDataEdit.tag}
                  onChange={handleChangeEdit}
                />
                <TextInputComponent
                  htmlfor="detail"
                  label="Detail Challenge"
                  type="text"
                  id="detail"
                  name="detail"
                  value={formDataEdit.detail}
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
                <TextInputComponent
                  htmlfor="winner"
                  label="Pemenang"
                  type="text"
                  id="winner"
                  name="winner"
                  value={formDataEdit.winner}
                  onChange={handleChangeEdit}
                />
              </>
            ) : (
              <>
                <div className="flex justify-between items-center gap-5">
                  <div className="mr-3 w-1/2">
                    <TextInputComponent
                      htmlfor="namaChallenge"
                      label="Nama Challenge"
                      type="text"
                      id="namaChallenge"
                      name="namaChallenge"
                      value={formDataEdit.namaChallenge}
                      onChange={handleChangeEdit}
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
                      className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                    >
                      Tambah Foto
                    </div>
                  </div>
                </div>

                <TextInputComponent
                  htmlfor="deskripsi"
                  label="Deskripsi Singkat"
                  type="text"
                  id="deskripsi"
                  name="deskripsi"
                  value={formDataEdit.deskripsi}
                  onChange={handleChangeEdit}
                />
                <TextInputComponent
                  htmlfor="deskripsiDetail"
                  label="Deskripsi Detail"
                  type="text"
                  id="deskripsiDetail"
                  name="deskripsiDetail"
                  value={formDataEdit.deskripsiDetail}
                  onChange={handleChangeEdit}
                />
                <div className="flex justify-between items-center gap-5">
                  <div>
                    <TextInputComponent
                      htmlfor="durasi"
                      label="Tanggal Mulai"
                      type="text"
                      id="durasi"
                      name="durasi"
                      value={formDataEdit.durasi}
                      onChange={handleChangeEdit}
                    />
                  </div>
                  <div>
                    <TextInputComponent
                      htmlfor="durasi"
                      label="Tanggal Selesai"
                      type="text"
                      id="durasi"
                      name="durasi"
                      value={formDataEdit.durasi}
                      onChange={handleChangeEdit}
                    />
                  </div>
                </div>
                <TextInputComponent
                  htmlfor="winner"
                  label="Jumlah Pemenang"
                  type="text"
                  id="winner"
                  name="winner"
                  value={formDataEdit.winner}
                  onChange={handleChangeEdit}
                />
              </>
            )}
            <div className="w-full flex justify-center gap-5">
              <button
                className="bg-primaryBlue text-white w-full  px-10 py-2 rounded-lg"
                type="submit"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        isVisible={isDeleteModalVisible}
        onClose={handleCloseDeleteModal}
        title="Hapus Challenge"
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <img src={ImgTrash} alt="delete illustration" />
          <h3 className="text-lg text-center">
            Apakah anda yakin ingin menghapusnya?
          </h3>
          <div className="flex gap-5 w-full justify-center">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg"
              onClick={handleDelete}
            >
              Hapus
            </button>
            <button
              className="bg-gray-300 text-black px-6 py-3 rounded-lg"
              onClick={handleCloseDeleteModal}
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

export default DetailChallenge;
