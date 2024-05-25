import React from "react";
import portal from "../assets/portal.jpg"
const AwarenessPortal = () => {
  return (
    <>
      <div
        className="mt-[50px] md:w-full md:h-[600px] bg-cover bg-center backdrop-opacity-65"
        id="awareness"
        style={{backgroundImage: `url(${portal})`}}
      >
        <div className="flex flex-col items-center justify-center my-auto">
          <div className="mt-[115px]">
            <p className="text-center text-[50px]  text-white font-[Gilroy-XBold]">
              AWARENESS PORTAL
            </p>
          </div>
          <div className="text-center md:w-[50%] w-[80%] text-white font-[Gilroy-Light] ">
            <p className="mt-[20px] text-[27px] leading-[1.5em] tracking-[-0.5px]">
              We speak about important issue to address climate change.
            </p>
          </div>
          <div className=" mt-[20px] md:mb-0 mb-[64px]">
            <button
              className="group relative font-mediumcursor-pointer w-[210px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
              name="awareness"
            >
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium pt-[6px]">
                  Awareness Portal
                </p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwarenessPortal;
