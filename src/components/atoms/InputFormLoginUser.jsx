import React from "react";

function InputFormLoginUser({ txt, type }) {
  return (
    <div className="flex flex-col gap[4px]">
      <label
        className="text-[#1E293B] text-[14px] font-normal leading-[24px]"
        htmlFor={txt}
      >
        {txt}
      </label>
      <input
        className="border rounded-[8px] w-[300px] h-[42px] border-[#CBD5E1]"
        type={type}
        name={txt}
      />
    </div>
  );
}

export default InputFormLoginUser;
