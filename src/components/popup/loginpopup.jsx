import React from "react";

const LoginPopup = ({ showLoginPopup, handleLogin, handleClose }) => {
  return (
    <>
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-[500px] text-center">
            <h1 className="text-textPrimary text-lg font-semibold">
              Anda harus login terlebih dahulu
            </h1>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-primaryBlue text-white rounded-lg px-4 py-2"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
                onClick={handleClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
