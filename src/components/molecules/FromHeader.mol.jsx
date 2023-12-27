import React from "react";
import FormHeaderIconD from "../atoms/FormHeaderIconD";

function FromHeader() {
  return (
    <div className="mb-8">
      {/* <!-- title --> */}
      <div className="flex items-center gap-[4px]">
        <FormHeaderIconD />
        <h4 className="text-[#624BFF] text-[26px] font-[700] tracking-[-1.04px]">
          DashUI
        </h4>
      </div>

      <p className="text-[14px] font-normal text-[#475569]">
        Please enter your user information.
      </p>
    </div>
  );
}

export default FromHeader;
