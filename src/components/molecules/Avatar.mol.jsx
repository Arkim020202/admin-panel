import React from "react";
import pro from "../../assets/imgs/profile.svg";
import DarkModeIconOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import Badge from "@mui/material/Badge";
import { dark } from "../../service/atom";
import { useRecoilState } from "recoil";
function Avatar() {
  const [darkMode, setDarkMode] = useRecoilState(dark);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex items-center gap-2">
      <button onClick={handleDark}>
        {darkMode ? (
          <LightModeOutlinedIcon className="text-gray-500" />
        ) : (
          <DarkModeIconOutlinedIcon className="text-gray-500" />
        )}
      </button>

      <Badge color="error" overlap="circular" badgeContent={4}>
        <NotificationsNoneOutlinedIcon className="text-gray-500" />
      </Badge>
      <img src={pro} className="ml-2" />
    </div>
  );
}

export default Avatar;
