import React from "react";
import Link from "next/link";
const notfound = () => {
  return (
    <>
      <div className="items-center  flex flex-col justify-center  shadow_card px-4 max-md:px-5 bg-[#FFF8F2]  min-h-screen  ">
        <div className="w-full max-w-[1228px]  max-md:max-w-full max-md:my-10 flex justify-normal">
          <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
            <img src="/Layer/layer-3.png" alt="" />
            <div className="font-brice-semi font-medium md:text-[42px] text-[18px] leading-[58.67px]  text-[#254653]">
              Website Under Maintenance...
            </div>
            <div className="font-inter font-normal md:text-[22px] md:leading-[35px] text-center max-w-[650px]">
              Our website is currently undergoing scheduled maintenance. We
              should be back shortly. Thank you for your patience.
            </div>
            <Link href={"/"}>
              <button className="relative inline-flex items-center justify-center px-6 py-3 font-brice-semi font-medium text-white bg-gray-800 rounded-md group w-[196px]">
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#254653]  rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[#F3A161]  rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#F3A161]  rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 ">
                  Go Home{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default notfound;