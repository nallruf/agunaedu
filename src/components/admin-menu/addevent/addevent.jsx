import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TextInputComponent from "../../../components/auth/textinput";
import MultiSelectInputComponent from "../../../components/auth/multipleinput";
import InputImgComponent from "../inputimg/inputimg";
import { CiCalendar } from "react-icons/ci";

const AddEvent = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const navigate = useNavigate();
  const imagePicker = useRef();

  const [formData, setFormData] = useState({
    namaEvent: "",
    namaDeskripsi: "",
    namaWaktu: "",
    namaTanggal: "",
    tag: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  toast.success("Event Ditambahkan");
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-auto">
        <div className="my-[20px] md:my-[30px]">
          <button
            className="flex items-center text-lg gap-3 text-primaryBlue"
            onClick={onClose}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <h3>Kembali</h3>
          </button>
          <h1 className="text-3xl font-semibold pt-8 pb-3">Tambah Event</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="mr-3 w-1/2">
                  <TextInputComponent
                    htmlfor="namaEvent"
                    label="Nama Event"
                    type="text"
                    id="namaEvent"
                    name="namaEvent"
                    value={formData.namaEvent}
                    onChange={handleChange}
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
              <div>
                <TextInputComponent
                  htmlfor="namaDeskripsi"
                  label="Deskripsi"
                  type="text"
                  id="namaDeskripsi"
                  name="namaDeskripsi"
                  value={formData.namaDeskripsi}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <TextInputComponent
                  htmlFor="namaWaktu"
                  label="Waktu"
                  type="text"
                  id="namaWaktu"
                  name="namaWaktu"
                  value={formData.namaWaktu}
                  onChange={handleChange}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <CiCalendar className="h-6 w-6 text-black" />
                </div>
              </div>
              <div>
                <TextInputComponent
                  htmlfor="namaTanggal"
                  label="Tanggal"
                  type="text"
                  id="namaTanggal"
                  name="namaTanggal"
                  value={formData.namaTanggal}
                  onChange={handleChange}
                />
              </div>
              <div>
                <MultiSelectInputComponent
                  htmlFor="Tag"
                  label="Tag"
                  name="tag"
                  id="tag"
                  value={formData.tag}
                  onChange={(selectedTags) =>
                    setFormData({ ...formData, tag: selectedTags })
                  }
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
