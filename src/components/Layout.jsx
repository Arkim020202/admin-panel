import React from "react";
import Sidebar from "./organisms/Sidebar.org";
import Header from "./organisms/Header.org";
import { dark } from "../service/atom";
import { useRecoilValue } from "recoil";

function layout({children}) {
  const isDark = useRecoilValue(dark);
  let html = document.getElementsByTagName("html");
  isDark ? html[0].classList.add("dark") : html[0].classList.remove("dark");
  return (
    <div className="flex flex-row dark:bg-gray-700 h-screen w-full ">
      <Sidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
