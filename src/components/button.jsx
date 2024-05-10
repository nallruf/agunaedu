import React from "react";

const ButtonComponent = ({
  nameButton,
  confirm = "",
  direct = "",
  onclick,
}) => {
  return (
    <>
      <div className="mt-8 flex flex-col items-center gap-y-3">
        <button className="w-full bg-[#1470EF] text-white rounded-[8px] py-[10px]">
          {nameButton}
        </button>
        {confirm && direct && (
          <p className="text-[#465467] text-[14px] font-normal">
            {confirm}
            <span
              className="text-[#1470EF] cursor-pointer ml-2 text-[14px] font-medium"
              onClick={onclick}
            >
              {direct}
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default ButtonComponent;
