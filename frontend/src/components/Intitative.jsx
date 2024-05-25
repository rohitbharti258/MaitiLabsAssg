import React from 'react'
import { InitiativeData } from '../data/InitiativeData'

const Intitative = () => {
  return (
      <div className="text-center">
            <h1 className="text-[#1f3a2b] text-2xl font-bold mt-10">
              Our Initiative
            </h1>
            <div className="flex flex-col md:flex-row justify-evenly  sm:w-1/2 m-[8px]  sm:mx-auto sm:h-full h-full md:h-full p-5 bg-[#f7f1ec] rounded-xl border-2 border-[#c2bebb] mt-10">
              <div className="hidden  md:block relative left-1/2 bg-[#c2bebb] w-0.5 h-[400px] top-2"></div>
              {InitiativeData.map((data,index)=> (
                 <div key = {index} className="flex flex-col justify-center items-center align-center h-full sm:h-full p-5 md:w-full sm:w-full w-full">
                 <img src={require(`../assets/${data.imgURL}`)} alt="Sample" className="m-[10px] rounded-xl" />
                 <h6 className="text-[#1f3a2b] text-center font-bold mt-4">
                   {data.title}
                 </h6>
                 <h6 className="text-sm text-center" dangerouslySetInnerHTML={{ __html: data.desc }} />
                 <button
                   name="awareness"
                   className="text-darkblue text-sm text-blue-500"
                 >
                   Learn More &gt;
                 </button>
               </div>
              ))}
              
            </div>
          </div>
  )
}

export default Intitative
