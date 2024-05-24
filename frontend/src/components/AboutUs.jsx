import React from 'react'
import { ContentData } from '../data/ContentData'

const AboutUs = () => {
  return (
    <>
     <div className="cursor-default mt[54px] w-[310px] h-[71px] mx-auto text-center text-[57px] text-[#1E3A2B] font-[Gilroy-Bold] md:pt-[30px] pt-[15px]">
            About us
          </div>

          {ContentData.map(({ imgURL, title, description }, index) => (
            <div
              className="mx-auto mt-[69px] md:flex block w-[90%]"
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-[630px] w-[auto] my-[20px] mx-auto">
                    <img
                      className=" rounded-[20px]"
                      src={require(`../assets/${imgURL}`)}
                      alt={`image${index + 1} not found`}
                    />
                  </div>
                  <div className="md:w-[50%] md:h-[auto] h-full my-auto md:ml-[37px] w-[auto]">
                    <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-left">
                      {title}
                    </h1>
                    <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-left">
                      {description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-[50%] md:h-[auto] h-full my-auto md:ml-[37px] w-[auto]">
                    <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-left">
                      {title}
                    </h1>
                    <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-left">
                      {description}
                    </p>
                  </div>
                  <div className="md:w-[630px] w-[auto] my-[20px] mx-auto">
                    <img
                      className=" rounded-[20px]"
                      src={require(`../assets/${imgURL}`)}
                      alt={`image${index + 1} not found`}
                    />
                  </div>
                </>
              )}
            </div>
          ))} 
    </>
  )
}

export default AboutUs
