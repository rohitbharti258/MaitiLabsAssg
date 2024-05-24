import React from "react";

const Extra = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="w-[100%] h-screen p-5 flex flex-col gap-6 justify-center items-center font-bold  text-4xl text-center text-white bg-[#1E3A2B] ">
      Will be done ,When i get select for this role 😁
      <button
        className="group relative font-mediumcursor-pointer ml-1 w-[150px] h-[40px] delay-50 rounded-full bg-[#ffff] hover:bg-[#1e3a2b] hover:shadow-md hover:shadow-white text-[#1e3a2b] transition-colors duration-[300ms] hover:text-[#ffff] hover:font-semibold transform scale-100 group-hover:scale-110"
        name="Signup"
      >
        <span>
          <p
            className="transition-transform transform scale-105 group-hover:scale-100 font-[20px]"
            onClick={goBack}
          >
            Back
          </p>
        </span>
      </button>
    </div>
  );
};

export default Extra;
