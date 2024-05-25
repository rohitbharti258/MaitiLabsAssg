import React from "react";
import CommunityMembers from "./CommunityMembers";
import Intitative from "./Intitative";
import AboutUs from "./AboutUs";
import AwarenessPortal from "./AwarenessPortal";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import VideoPlay from "./VideoPlay";
import '../App.css'

const Content = () => {
  return (
    <>
      <div className="cursor-default md:w-auto w-auto md:mx-auto mx-auto md:mt-[101px] sm:mt-[150px]  mt-[300px] bg-white" id="content">
        <div className="md:w-auto w-auto md:mx-auto mx-auto" style={{ backgroundColor: "rgb(248, 244, 240)" }}>
          <AboutUs/>

          <Intitative/>
          <div className="md:w-[17%] w-[30%] md:h-[58px] h-[46px] mx-auto text-center relative top-[7vh] md:mt-[77px] mt-[66px] pb-[100px]">
            <button
              className="group relative font-mediumcursor-pointer w-[130px] my-[32px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
              name="about"
            >
              <span>
                <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">
                  More
                </p>
              </span>
            </button>
          </div>
          
        </div>
        <CommunityMembers/>
          <AwarenessPortal/>
          <JoinUs/>
          <ContactUs/>
          <VideoPlay/>
          <Footer/>
      </div>
    </>
  );
};

export default Content;
