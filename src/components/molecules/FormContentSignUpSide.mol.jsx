import React from "react";
import InputFormLoginUser from "../atoms/InputFormLoginUser";
import CheckBoxFormLoginUser from "../atoms/CheckBoxFormLoginUser";
import ButtonFormLoginUser from "../atoms/ButtonFormLoginUser";

function FormContentSignupSide() {
  return (
    <div className="w-[300px]  flex flex-col gap-[16px]">
      {/* <!-- user name --> */}
      <InputFormLoginUser txt={"Username"} type={"text"} />
      <InputFormLoginUser txt={"E-Mail"} type={"text"} />
      <InputFormLoginUser txt={"Password"} type={"password"} />
      <InputFormLoginUser txt={"Confirm"} type={"password"} />

      {/* <!-- password --> */}
      {/* <!-- remember me --> */}
      <CheckBoxFormLoginUser
        txt={"Remember Me"}
        forWhat={"RememberMe"}
        type={"checkbox"}
      />
      {/* <!-- sign in --> */}
      <ButtonFormLoginUser txt="Signup" />
    </div>
  );
}

export default FormContentSignupSide;
