import React from "react";
import { useNavigate } from "react-router-dom";

function CreateUserForm({ txt, url }) {
  const nav = useNavigate();
  const handleLink = (e) => {};
  return (
    <div className="flex justify-between  h-[24px]">
      <a
        className="text-[14px] font-normal leading-[24px] text-[#624BFF] cursor-pointer"
        onClick={(e) => nav(url)}
      >
        {txt}
      </a>
      <a
        className="text-[#1E293B] text-[14px] font-normal leading-[24px] cursor-pointer"
        onClick={(e)=>nav("/reset")}
      >
        Forgot Password
      </a>
    </div>
  );
}

export default CreateUserForm;
