import React from "react";
import Logo from '../assets/logo.png'
import { BrowserRouter as Router ,Link } from "react-router-dom";
import '../App.css'
const Footer = () => {
  return (
    <>
      <footer className="relative top-[82px] h-fit w-auto md:flex ">
        <div className="mx-auto md:mt-[68px] md:h-fit md:w-[50%] w-[100%] ml-[30px]">
          <div className="flex md:ml-0 ml-10 h-[70px] font-[Gilroy-Light] font-light text-[32px] ">
            <img
              className="md:w-[68px] w-[48px] md:h-[68px] h-[48px]"
              src={Logo}
              alt="logo"
            />{" "}
            <div className="pl-4 md:pt-2 font-bold">Maiti Labs</div>
          </div>
          <div className="md:hidden block my-[20px] font-[Gilroy-Light] font-light md:text-[25px] text-[22px] md:h-auto  h-[151px] leading-[29px] md:w-[415px] w-[80%] mx-auto ">
            <p className=" text-center ">
              Join a diverse and passionate community, making a lasting impact
              on our planet. Together, let's raise awareness and accelerate
              climate action worldwide.
            </p>
          </div>
          <div className="md:block hidden  my-[66px] font-[Gilroy-Light] font-light md:text-[25px] text-[22px] md:h-auto  h-[151px] leading-[29px] md:w-[415px]  ">
            <p className="md:justify-left  ">
              Join a diverse and passionate community, making a lasting impact
              on our planet. Together, let's raise awareness and accelerate
              climate action worldwide.
            </p>
          </div>
          <div className="flex md:w-full w-fit mx-auto mt-[80px]">
            <button className="group relative font-mediumcursor-pointer mr-1 md:w-[150px] w-[100px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110">
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">
                  Join Us
                </p>
              </span>
            </button>
            <button
              className="md:hidden group relative font-mediumcursor-pointer mr-1 md:w-[150px] w-[100px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
              to="/willgetselect"
            >
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">
                  Sign Up
                </p>
              </span>
            </button>
          </div>
        </div>
        <div className="md:flex hidden flex-col  md:w-[40%] mx-auto w-[90%] md:ml-[280px] my-[46px] mr-[46px] md:h-[470px] ">
          <button
            className="group relative font-mediumcursor-pointer mr-1 md:w-[200px] w-[100px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
            name="Signup"
          >
            <span>
              <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">
                Sign Up
              </p>
            </span>
          </button>
          <div className="flex mt-[80px]">
            <div className="mt-[23px] w-[40%]  font-[Plus Jakarta  Sans] font-bold text-[28px] leading-[24px]">
              Company
              <div className="mt-[19px] md:text-[20px] text-[18px] font-[Gilroy-Light] font-light text-left leading-[40px]">
                <ul>
                  <li>
                    {" "}
                    <Link className="Link block   hover:text-[#1E3A2B]  " to="/willgetselect">
                      About
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="Link block  hover:text-[#1E3A2B]" to="/willgetselect">
                      Awareness Portal
                    </Link>
                  </li>
                  <li>
                    <Link className="Link block   hover:text-[#1E3A2B]" to="/willgetselect">
                      GreenBit
                    </Link>
                  </li>
                  <li>
                    <Link className="Link block   hover:text-[#1E3A2B]" to="willgetselect">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="Link block  hover:text-[#1E3A2B]" to="/willgetselect">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[23px] w-[40%]   font-[Plus Jakarta  Sans] font-bold  text-[28px] leading-[1.2em] ml-[85px]">
              Resources
              <div className="mt-[19px] md:text-[20px] text-[18px] font-[Gilroy-Light] font-light text-left leading-[40px]">
                <ul>
                  <li>
                    {" "}
                    <Link className="Link block text-decoration-none hover:text-[#1E3A2B]  " to="/willgetselect">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="Link block  hover:text-[#1E3A2B]"
                      to="https://www.linkedin.com/company/maitilabs/"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="Link block  hover:text-[#1E3A2B]"
                      to="https://x.com/MaitiLabs?t=t0BTUrSX61h-gBoopo700A&amp;s=08"
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:hidden flex mt-[48px] md:text-[20px] text-[18px] font-[Belleza] text-left bg-[#BCC2C4]">
            <ul className="flex h-fit w-[100%]  mt-[12px] mb-[20px] justify-around mx-[20px]">
              <li>
                <Link
                  className="Link hover:text-[#1E3A2B]"
                  to=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="inline mr-2"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="Link hover:text-[#1E3A2B]  "
                  to="https://www.instagram.com/maitilabs?igsh=MWF0c2J3eXdvNmFhMQ=="
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    className="inline mr-2"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="Link hover:text-[#1E3A2B]"
                  to="https://www.linkedin.com/company/maitilabs/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="inline mr-2"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="Link  hover:text-[#1E3A2B]" to="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="inline mr-2"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
