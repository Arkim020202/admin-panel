import React from "react";
import { layOutsAndPages, routeDashboard, uiComponents } from "../config";
import SideBarDashboardItem from "../molecules/SideBarDashboardItem.mol";
import LabelSidebar from "../atoms/LabelSidebar";
import { lightBlue } from "@mui/material/colors";

function Sidebar() {
  return (
    <div className="min-w-[256px] max-w-[256px] bg-gray-800 p-6 flex flex-col gap-2  max-h-screen overflow-auto">
      <h2 className="text-white font-black text-[26px] font-inter">Dash UI</h2>

      {routeDashboard.map((i) => (
        <SideBarDashboardItem
          key={crypto.randomUUID()}
          icon={i.icon}
          title={i.title}
          iconDownArrow={i.iconArrowDown}
          iconUpArrow={i.iconArrowUp}
          
        />
      ))}
      <LabelSidebar title="Layouts & Pages" />
      {layOutsAndPages.map((i) => (
        <SideBarDashboardItem
          key={crypto.randomUUID()}
          icon={i.icon}
          title={i.title}
          iconDownArrow={i.iconArrowDown}
          iconUpArrow={i.iconArrowUp}
          subTitles={i.subTitles.map((j)=>(
            <li>{j}</li>
          ))}
          dropDown={i.dropDown}
          iconDot={i.iconDot}
        />
      ))}

      <LabelSidebar title="UI Components" />

      {uiComponents.map((i) => (
        <SideBarDashboardItem
          key={crypto.randomUUID()}
          icon={i.icon}
          title={i.title}
          iconDownArrow={i.iconArrowDown}
          iconUpArrow={i.iconArrowUp}
          subTitles={i.subTitles}
          dropDown={i.dropDown}
          iconDot={i.iconDot}
        />
      ))}
    </div>
  );
}

export default Sidebar;
