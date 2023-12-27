import React from "react";

import CreateUserForm from "../molecules/CreateUserForm.mol";
import FromHeader from "../molecules/FromHeader.mol";
import FormContentSignupSide from "../molecules/FormContentSignUpSide.mol";

function SignupFormUsers() {
  return (
    <main className="bg-[#E2E8F0] w-full min-h-screen flex items-center justify-center">
      <div className="max-w-[369px] bg-white rounded-[12px] p-8 shadow-[0_1px_2px_0_rgba(21, 30, 40, 0.08),0_2px_4px_0_rgba(13, 23, 33, 0.08)]">
        {/* <!-- header form --> */}
        <FromHeader />

        <div>
          {/* form  */}
          <form className="flex flex-col w-[305px]  gap-[24px]">
            {/* <!--wrap---> */}
            <FormContentSignupSide />
            {/* <!-- create an account --> */}
            <CreateUserForm txt={"Already member? Login"} url={"/login"} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignupFormUsers;
