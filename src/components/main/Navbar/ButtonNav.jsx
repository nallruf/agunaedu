import React from "react";

const ButtonNav = () => {
  const buttons = [
    {
      id: 1,
      button: "Masuk",
    },
    {
      id: 2,
      button: "Daftar",
    },
  ];

  return (
    <div className="md:block flex flex-col items-center">
      {buttons.map(({ id, button }) => (
        <button
          key={id}
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

export default ButtonNav;
