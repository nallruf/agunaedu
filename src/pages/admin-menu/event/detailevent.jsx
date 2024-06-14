import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import Modal from "../../../components/admin-menu/modal/modal";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const DetailEvent = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <HeaderDashboard
          goto={navigate(-1)}
          buttonBack="Kembali"
          title="Detail Event"
          desc="Webinar Public Speaking"
        />
        <div className="px-10 sm:px-20 md:px-40">
          <div className="flex flex-col gap-10">
            <div>
              <TitleDashboard title="Event : Webinar Public Speaking" />
              <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white">
                    <thead className="bg-primaryBlue text-white ">
                      <tr>
                        <th className="py-2 px-4 text-left">Aksi</th>
                        <th className="py-2 px-4 text-left">Nama Event</th>
                        <th className="py-2 px-4 text-left">Deskripsi</th>
                        <th className="py-2 px-4 text-left">Waktu</th>
                        <th className="py-2 px-4 text-left">Tanggal</th>
                        <th className="py-2 px-4 text-left">Tag</th>
                        <th className="py-2 px-4 text-left">Gambar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex gap-2 cursor-pointer">
                            <LuPencil
                              className="text-primaryBlue"
                              onClick={handleEditClick}
                            />
                            <FaRegTrashAlt
                              className="text-red-500"
                              onClick={() => alert("Delete event")}
                            />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          Webinar Public Speaking
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText(
                            "Bergabunglah dengan kami dalam acara yang menginspirasi ini yang bertujuan untuk membekali Anda dengan keterampilan yang diperlukan untuk menjadi seorang pembicara publik yang percaya diri dan berpengaruh.",
                            20
                          )}
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          08.00 WIB
                        </td>
                        <td className="py-4 px-1.5 text-textTertiary whitespace-nowrap">
                          11/03/2024
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText("Public Speaking, Project Manager", 20)}
                        </td>
                        <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                          <div className="border border-secondaryBlue flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                            Lihat
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <TitleDashboard title="Konten Event" />
              <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white">
                    <thead className="bg-gray-100 text-textTertiary">
                      <tr>
                        <th className="py-2 px-4 text-left ">Aksi</th>
                        <th className="py-2 px-4 text-left ">Nama Event</th>
                        <th className="py-2 px-4 text-left ">Sub Judul</th>
                        <th className="py-2 px-4 text-left ">Deskripsi</th>

                        <th className="py-2 px-4 text-left ">Gambar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex gap-2 text-primaryBlue cursor-pointer">
                            <LuPencil
                              className="text-primaryBlue"
                              onClick={handleEditClick}
                            />
                            <FaRegTrashAlt
                              className="text-red-500"
                              onClick={() => alert("Delete event")}
                            />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          Webinar Public Speaking
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText(
                            "Webinar ini merupakan webinar public speaking untuk membantu terbiasa dengan public speaking.",
                            20
                          )}
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText(
                            "Webinar ini merupakan webinar public speaking untuk membantu terbiasa dengan public speaking.",
                            20
                          )}
                        </td>

                        <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                          <div className="border border-secondaryBlue flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                            Lihat
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TitleDashboard title="Detail Event" />
            <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
              <div className="overflow-x-auto">
                <table className="w-full bg-white">
                  <thead className="bg-gray-100 text-textTertiary">
                    <tr>
                      <th className="py-2 px-4 text-left ">Aksi</th>
                      <th className="py-2 px-4 text-left ">Tanggal</th>
                      <th className="py-2 px-4 text-left ">Waktu</th>
                      <th className="py-2 px-4 text-left ">Lokasi</th>
                      <th className="py-2 px-4 text-left ">Komunitas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex gap-2 text-primaryBlue cursor-pointer">
                          <LuPencil
                            className="text-primaryBlue"
                            onClick={handleEditClick}
                          />
                          <FaRegTrashAlt
                            className="text-red-500"
                            onClick={() => alert("Delete event")}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                        11/09/2029
                      </td>
                      <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                        09:00 - 12:00 WIB
                      </td>
                      <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                        <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                          <AiOutlineLink /> Zoom Meeting
                        </div>
                      </td>

                      <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                        <div className="border border-secondaryBlue flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                          Lihat
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <TitleDashboard
              button="Tambah Pembicara"
              onClick={() => navigate("/admin/event/buyer")}
              title="Pembicara"
            />
            <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
              <div className="overflow-x-auto">
                <table className="w-full bg-white">
                  <thead className="bg-gray-100 text-textTertiary">
                    <tr>
                      <th className="py-2 px-4 text-left ">Aksi</th>
                      <th className="py-2 px-4 text-left ">Nama</th>
                      <th className="py-2 px-4 text-left ">Pekerjaan</th>
                      <th className="py-2 px-4 text-left ">Gambar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex gap-2 text-primaryBlue cursor-pointer">
                          <LuPencil
                            className="text-primaryBlue"
                            onClick={handleEditClick}
                          />
                          <FaRegTrashAlt
                            className="text-red-500"
                            onClick={() => alert("Delete event")}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                        Bahrul Ulum Fadhlur
                      </td>
                      <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                        Web Developer Infinite Learning
                      </td>

                      <td className="py-4 px-4 text-primaryBlue cursor-pointer font-semibold whitespace-nowrap">
                        <div className="border border-secondaryBlue flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl">
                          Lihat
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={handleModalClose} />
    </>
  );
};

export default DetailEvent;
