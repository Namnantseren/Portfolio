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
    <header className="fixed w-full z-10 h-[168px]   ">
      <div className=" h-[143px] nav-bar flex justify-between items-center px-[48px] bg-gradient-to-b from-black via-transparent to-transparent  ">
        <div className="nav-left ">Logo made by namka</div>
        <nav className="nav-mid w-[180px] h-[46px] border-[1px] flex justify-center bg-gray-500/60 backdrop-blur-2xl  gap-1 rounded-[24px] items-center">
          <button className="w-[80px] h-[36px]  rounded-[24px] bg-gray-500/60">
            work
          </button>
          <button
            className="w-[80px] h-[36px] bg-gray-500/60 rounded-[24px]"
            onClick={() => {
              "/about";
            }}
          >
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
