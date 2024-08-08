import React from "react";

export default function HeroSection(): JSX.Element {
  return (
    <div className="w-full justify-center flex relative pt-[160px] ">
      <div className="w-[1280px] h-[667px] bg-green-500 mt-6 flex justify-center rounded-[24px]  shadow-xl shadow-slate-400 ">
        <div className=" flex items-center shadow flex-col w-full p-[8px] ">
          <div className="three-light flex justify-between  border-[1px] w-full rounded-t-lg px-[12px] ">
            <ul className="flex gap-1">
              <li>red</li>
              <li>yellow</li>
              <li>green</li>
            </ul>
            <div className="plus">+</div>
          </div>
          <div className="w-full h-full border-[1px] justify-center items-center flex">
            Welcome back sir
          </div>
        </div>
      </div>
    </div>
  );
}
