import React from "react";
import SearchBar from "../molecules/SearchBar.mol";
import Avatar from "../molecules/Avatar.mol";

function Header() {
  return (
    <div className="flex-grow py-3 px-8 flex justify-between max-h-[66px] shadow-smooth">
      <SearchBar />
      <Avatar />
    </div>
  );
}

export default Header;
