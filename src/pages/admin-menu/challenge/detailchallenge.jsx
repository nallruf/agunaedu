import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

import Modal from "../../../components/admin-menu/modal/modal";
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
const DetailChallenge = () => {
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
          goto="/"
          buttonBack="Kembali"
          title="Detail Challenge"
          desc="Webinar Public Speaking"
        />
        <div className="px-10 sm:px-20 md:px-40">
          <div className="flex flex-col gap-10">
            <div>
              <TitleDashboard title="Challenge : Webinar Public Speaking" />
              <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white">
                    <thead className="bg-primaryBlue text-white ">
                      <tr>
                        <th className="py-2 px-4 text-left">Aksi</th>
                        <th className="py-2 px-4 text-left">Nama Challenge</th>
                        <th className="py-2 px-4 text-left">Durasi</th>
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
                          20 Mar - 30 Aug 2090
                        </td>
                        <td className="py-4 px-1.5 text-textTertiary whitespace-nowrap">
                          Hacker,
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
                        <th className="py-2 px-4 text-left ">Nama Challenge</th>
                        <th className="py-2 px-4 text-left ">Sub Judul</th>
                        <th className="py-2 px-4 text-left ">Tag</th>
                        <th className="py-2 px-4 text-left ">
                          Detail Challenge
                        </th>
                        <th className="py-2 px-4 text-left ">Durasi</th>

                        <th className="py-2 px-4 text-left ">Pemenang</th>

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
                          Mobile App dengan Flutter
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText(
                            "Membuat mobile app pembalajaran dengan menggunakan flutter",
                            10
                          )}
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          Hacker, Challenge
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          {truncateText(
                            "Bergabunglah dengan kami dalam acara yang menginspirasi ini yang bertujuan untuk membekali Anda dengan keterampilan yang diperlukan untuk menjadi seorang pembicara publik yang percaya diri dan berpengaruh. ",
                            20
                          )}
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          20 Mar - 30 Aug 2090
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          3 Orang
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
              <TitleDashboard title="Detail Skor" />
              <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-5">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white">
                    <thead className="bg-gray-100 text-textTertiary">
                      <tr>
                        <th className="py-2 px-4 text-left ">Aksi</th>
                        <th className="py-2 px-4 text-left ">Skor Peserta</th>
                        <th className="py-2 px-4 text-left ">Skor Juara</th>
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
                          300 Poin
                        </td>
                        <td className="py-4 px-4 text-textTertiary whitespace-nowrap">
                          500 poin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailChallenge;
