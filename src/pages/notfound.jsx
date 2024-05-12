import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Not Found";

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-textSecondary text-white">
        <h1 className="mb-1 text-4xl text-title-color font-semibold">404</h1>
        <h2 className="mb-4 text-3xl text-title-color font-semibold">
          Page Not Found
        </h2>
        <p className="text-center">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
