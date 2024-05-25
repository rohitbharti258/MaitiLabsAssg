import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.png";
import { Link } from "react-router-dom";
import LangSelector from "./LangSelector";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handlechange = (e) => {
    e.preventDefault();
    setisOpen(!isOpen);
  };
  const Nav = ({ isOpen }) => {
    return (
      <div className="flex flex-col">
        <div
          className={
            isOpen
              ? "md:hidden flex flex-col sticky top-[70px] bg-white z-50 px-2"
              : "hidden"
          }
        >
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
          <div className="text-center mr-9 relative w-[9%] h-[45px]  md:ml-0 ml-4">
            <div className="my-auto mx-auto cursor-pointer hover:shadow-xl hover:text-[#496c62] rounded-sm">
              Login
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="cursor-default sticky w-auto top-0  flex md:justify-around  justify-between items-center mt-[20px] text-[#1E3A2B] bg-[#ffffff] h-[80px] z-10">
        <div className="flex ml-3">
          <img
            className="md:w-[40px] w-[25px] md:h-[40px] h-[25px]"
            src={Logo}
          />
          <div className="font-[Gilroy-Light] md:text-[30px] text-[20px] ml-1">
            Maiti Labs
          </div>
        </div>
        <div className="cursor-pointer md:hidden block md:w-[34px] w-[25px] order-last ml-[40px] md:h-[42px] h-[30px] mr-3">
          {isOpen && <img src={Close} alt="close" onClick={handlechange} />}
          {!isOpen && <img src={Menu} alt="open" onClick={handlechange} />}
        </div>
        <div className="flex flex-col items-center">
          <NavMenu />
          <LangSelector/>
        </div>
        <div className="md:flex hidden text-center">
          <button className="group relative  font-mediumcursor-pointer w-[150px] h-[40px] delay-75 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b]">
            <span>
              <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">
                Login
              </div>
            </span>
          </button>
        </div>
      </div>
      <Nav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
