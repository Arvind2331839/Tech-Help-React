import React from "react";
import Typed from "react-typed";
const Banner = () => {
 
  return (
    <div className="bg-[#5fa4ff] w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold  ">
        <div className="text-xl md:text-3xl md:p-[20px]">Learn with us</div>
        <h1 className="text-white text-5xl md:text-[80px] md:p-[20px]">
          Grow with us
        </h1>

        <div className="text-[20px] md:text-[50px] md:p-[20px] text-white">
          <Typed
            className="pl-3"
            strings={["HTML & CSS", "Java Script", "React"]}
            typeSpeed={200}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="w-[30%] bg-black text-white p-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;

