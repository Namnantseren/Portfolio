import React from "react";

export default function HeroSection(): JSX.Element {
  return (
    <div className="w-full justify-center flex relative pt-[160px] bg-gradient-to-b from-black to-gray-800   ">
      <div className="w-[1280px] h-[667px] border-white-500 border bg-gradient-to-b from-purple-500 mt-6 flex justify-center rounded-[24px]  ">
        <div className=" flex items-center shadow flex-col w-full p-[8px] ">
          <div className="three-light bg-slate-400 flex justify-between items-center  border-[1px] w-full rounded-t-[24px] px-[12px] ">
            <ul className="flex gap-3 p-3">
              <li className="border-red-500 bg-red-500 border shadow-custom_red rounded-[100%] w-[12px] h-[12px]"></li>
              <li className="border-yellow-500 bg-yellow-500 shadow-custom_yellow border rounded-[100%] w-[12px] h-[12px]"></li>
              <li className="border-green-500 bg-green-500 shadow-custom_green border rounded-[100%] w-[12px] h-[12px]"></li>
            </ul>
            <div className="plus">+</div>
          </div>
          <div className="w-full h-full border-[1px] justify-center items-center flex color-white ">
            <p className="z-50">Welcome back sir</p>
          </div>
        </div>
      </div>
      <div className="bottom-0 absolute w-full h-[500px] bg-gradient-to-t from-black"></div>
    </div>
  );
}
