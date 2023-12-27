import React from "react";

function CheckBoxFormLoginUser({ type, forWhat, txt }) {
  return (
    <div className="flex flex-row justify-start gap-[4px]">
      <input className="border-[#CBD5E1]" type={type} name={forWhat} />
      <label
        className="text-[#1E293B] text-[14px] font-normal leading-[24px]"
        htmlFor={forWhat}
      >
        {txt}
      </label>
    </div>
  );
}

export default CheckBoxFormLoginUser;
