import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const CommunityMembers = () => {
  const slides = [
    [
      {
        img: "https://www.maitilabs.org/static/media/cr1.76e6e874bd666bda8063.png",
        bg: "#EFE6DC",
      },
      {
        img: "https://www.maitilabs.org/static/media/cr2.eb57499f4077f8729bc1.png",
        bg: "#B5C7A4",
      },
    ],
    [
      {
        img: "https://www.maitilabs.org/static/media/cr3.dfb1c4ac552bcaccc53e.png",
        bg: "#CFDCFF",
      },
      {
        img: "https://www.maitilabs.org/static/media/cr4.d82670d0d34151b15941.png",
        bg: "#B5C7A4",
      },
    ],
    [
      {
        img: "https://www.maitilabs.org/static/media/cr5.11bb34dcd16ad86afc5e.png",
        bg: "#EFE6DC",
      },
      {
        img: "https://www.maitilabs.org/static/media/cr6.4e7f2d95b684faf21643.png",
        bg: "#CFDCFF",
      },
    ],
  ];

  return (
    <>
    {/* <div className='w-[100%] h-[100px] bg-[#ffffff]'>

    </div> */}
    <div className="cursor-default pt-24 mt-24 pb-16 bg-[#D9A673] flex flex-col items-center">
      <p className="mx-auto w-fit text-center font-bold md:text-[50px] text-[40px] tracking-[-2.1px] leading-[1.2em] ">Our Community Members Come from ❤️</p>
      <div className="w-full md:w-[937px] mt-14 md:mt-20">
        <Carousel showIndicators>
          {slides.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="flex justify-center gap-4 mt-16 md:mt-5 mb-16">
                  <img
                    style={{ backgroundColor: value[0].bg }}
                    className="w-[150px] md:w-[300px] rounded-3xl"
                    src={value[0].img}
                  />
                  <img
                    style={{ backgroundColor: value[1].bg }}
                    className="w-[150px] md:w-[300px] rounded-3xl"
                    src={value[1].img}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div>
      <button
        className="group relative font-mediumcursor-pointer ml-1 w-[100px] h-[40px] delay-50 rounded-full bg-[#ffff] hover:bg-[#1e3a2b] hover:shadow-md hover:shadow-white text-[#1e3a2b] transition-colors duration-[300ms] hover:text-[#ffff] hover:font-semibold transform scale-100 group-hover:scale-110"
        name="Signup"
      >
        <span>
          <p
            className="transition-transform transform scale-105 group-hover:scale-100 font-[20px]"
            
          >
            Join Us
          </p>
        </span>
      </button>
      </div>
    </div>
    </>
  );
}

export default CommunityMembers
