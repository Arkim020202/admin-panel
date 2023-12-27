import React from 'react'

function SideBarSubTitles({subTitle,insIco}) {
  return (
    <ul className={`${open ? "block" : "hidden"}`}>
      <li className="flex items-center gap-1 ml-5 cursor-pointer">
        {insIco}
        <span className="text-gray-500 font-DmSans text-sm">{subTitle}</span>
      </li>
    </ul>
  );
}

export default SideBarSubTitles
