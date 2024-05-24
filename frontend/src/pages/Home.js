import React from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.svg";
import NavMenu from "../components/NavMenu";
const Home = () => {
  return (
    <div>
      <div className="w-[100%] h-[2.5rem] text-[1.125rem] leading-7 flex justify-center items-center bg-[#1E3A2B] text-white">
        We Got into Ambition Accelerator 🚀
      </div>
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
        <div className="md:hidden block md:w-[34px] w-[25px] order-last ml-[40px] md:h-[42px] h-[30px] mr-3">
          <img src={Menu} alt="" />
        </div>
        <div>
          <NavMenu />
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

      <div>
        <div className="cursor-default mx-auto w-auto " id="home">
          <p className="text-[#1E3A2B] text-center mt-[115px] md:text-[80px] text-[62px]  font-[Gilroy-XBold]">
            The Voice Of Planet Earth in Every Language!
          </p>
          <p className="mx-auto md:mt-[40px] mt-[19px] text-center font-[Gilroy-Light] md:text-[30px] text-[25px] leading-[1.4] font-light text-[#1E3A2B] md:w-[589px] w-full h-auto opacity-[0.8] ">
            Global youth-led Non-Profit Organization
          </p>
          <div className="flex justify-evenly md:justify-around md:w-[540px] w-[65%] md:text-[18px] text-[15px] h-[112px] md:mt-[20px] mx-auto">
            <button
              name="joinus"
              className="group relative font-mediumcursor-pointer w-[230px] my-[32px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
            >
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100">
                  Join Us
                </p>
              </span>
            </button>
            <button
              name="awareness"
              className="group relative font-mediumcursor-pointer w-[230px] my-[32px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
            >
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100">
                  Awareness Portal
                </p>
              </span>
            </button>
          </div>
        </div>
        <div class="cursor-default md:w-[90%] w-full md:px-4 px-2 md:h-auto h-auto font-[Belleza] md:mt-[185px] mt-[150px] mx-auto ">
          <p class="md:text-[85px] text-[40px] md:leading-[100px] leading-[59px] text-center tracking-[-0.05em]">
            We are a Non-Profit Youth-Led Org fostering{" "}
            <span class="bg-[#1E3A2B] text-white">Climate Action</span> by
            making information accessible in every language possible. 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
