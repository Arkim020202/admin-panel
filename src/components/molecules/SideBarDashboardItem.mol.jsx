import React from "react";
import { useState } from "react";

const SideBarDashboardItem = (props) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ul>
      <li className="flex flex-col gap-4 ">
        <div
          className="flex items-center justify-between cursor-pointer "
          onClick={handleOpen}
        >
          <div className="flex items-center gap-2 text-white font-DmSans text-sm ">
            <span>{props.icon}</span>
            <span>{props.title}</span>
          </div>
          <div>{open ? props.iconUpArrow : props.iconDownArrow}</div>
        </div>
        <ul
          className={
            open
              ? "block transition-all duration-500"
              : "hidden transition-all duration-500"
          }
        >
        {props.subTitles}
        </ul>
      </li>
    </ul>
  );
};
export default SideBarDashboardItem;
