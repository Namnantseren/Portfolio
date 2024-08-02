import React from "react";
export default function Header(): JSX.Element {
  return (
    <header className="fixed w-full z-10 h-[168px] ">
      <div className="bg-[#facc15] nav-bar flex justify-between items-center pt-[24px] px-[48px] ">
        <div className="nav-left">Logo made by namka</div>
        <nav className="nav-mid w-[180px] h-[56px] flex justify-center bg-gray-500 gap-1 rounded-[24px] items-center">
          <button className="w-[80px] h-[36px] bg-[#84cc16] rounded-[24px]">
            work
          </button>
          <button className="w-[80px] h-[36px] bg-[#84cc16] rounded-[24px]">
            info
          </button>
        </nav>
        <div className="nav-right gap-3 flex">
          <button>LinkedIn</button>
          <button>Resume</button>
        </div>
      </div>
    </header>
  );
}
