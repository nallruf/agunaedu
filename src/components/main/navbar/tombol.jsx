import React from "react";
import { useNavigate } from "react-router-dom";

const Tombol = () => {
  const navigate = useNavigate();
  const buttons = [
    {
      id: 1,
      button: "Masuk",
      onclick: navigate("/auth/login"),
    },
    {
      id: 2,
      button: "Daftar",
      onclick: navigate("/auth/register"),
    },
  ];

  return (
    <div className="md:block flex flex-col items-center">
      {buttons.map(({ id, button, onclick }) => (
        <button
          key={id}
          onClick={onclick}
          className={`items-center rounded-lg font-semibold ${
            id === 1 ? "bg-white text-black" : "bg-blue-500 text-white"
          }  h-full px-6 py-2 `}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Tombol;
