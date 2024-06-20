import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../hooks/useauth";

const Modal = ({ onClose, courseId }) => {
  const { user } = useAuth();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/v1/user/settestimoni",
        {
          userCourseId: courseId,
          quotes: feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        onClose();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting feedback", error);
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white py-[54px] px-9 rounded-lg w-[600px] h-[550px] flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-xl font-semibold text-textLabel">
            Bagaimana Pembelajaranmu di Aguna Edu?
          </h2>
          <h3>
            Kami menghargai semua masukkan & juga saran yang kamu kirimkan!
          </h3>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="feedback"
              className="text-textLabel text-xl font-semibold"
            >
              Kritik dan saran lainnya
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              rows="8"
              placeholder="Bagikan pengalamanmu disini...."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              className="bg-primaryBlue text-white py-2 px-12 rounded-lg"
              onClick={handleSubmit}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
