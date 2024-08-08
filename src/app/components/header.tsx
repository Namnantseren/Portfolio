import React, { useEffect } from "react";

export default function Header(): JSX.Element {
  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://res.cloudinary.com/djkb0iudu/image/upload/v1722754353/cld-sample-5.jpg"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <header className="fixed w-full z-10 h-[168px]  ">
      <div className=" h-[143px] nav-bar flex justify-between items-center  px-[48px] bg-gradient-to-b from-black via-transparent to-transparent top-[-5] ">
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
