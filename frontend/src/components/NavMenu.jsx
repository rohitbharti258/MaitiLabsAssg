import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="md:flex flex-row hidden mx-auto my-auto" id="navmenu">
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          Home
        </Link>
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          About
        </Link>
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          Awareness Portal
        </Link>
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          Career
        </Link>
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          Contact
        </Link>
      </div>
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
        <Link className="Link" to="/willgetselect">
          Team
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
