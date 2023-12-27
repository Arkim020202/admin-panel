import React from "react";
import InputFormLoginUser from "../atoms/InputFormLoginUser";
import CheckBoxFormLoginUser from "../atoms/CheckBoxFormLoginUser";
import ButtonFormLoginUser from "../atoms/ButtonFormLoginUser";

function FormContentLoginSide() {
  return (
    <div className="w-[300px]  flex flex-col gap-[16px]">
      {/* <!-- user name --> */}
      <InputFormLoginUser txt={"Username"} type={"text"} />
      {/* <!-- password --> */}
      <InputFormLoginUser txt={"Password"} type={"password"} />
      {/* <!-- remember me --> */}
      <CheckBoxFormLoginUser
        txt={"Remember Me"}
        forWhat={"RememberMe"}
        type={"checkbox"}
      />
      {/* <!-- sign in --> */}
      <ButtonFormLoginUser txt="Signin" />
    </div>
  );
}

export default FormContentLoginSide;
