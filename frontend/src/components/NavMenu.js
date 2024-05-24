import React from "react";

const NavMenu = () => {
  return (
    <div className="md:flex flex-row hidden mx-auto my-auto" id="navmenu">
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        Home
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        About
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        Awareness Portal
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        Career
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        Contact
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        Team
      </div>
    </div>
  );
};

export default NavMenu;
