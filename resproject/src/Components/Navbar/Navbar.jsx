import { useState } from "react";
import './navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <div className="h-[9vh] w-[100%] fixed top-0 z-50  box">
        <div
          className={
            isScrolled
              ? "bg-black h-[9vh] w-[100%]  flex items-center text-white justify-between  transition-all ease-linear"
              : "bg-none h-[9vh] w-[100%]  flex items-center text-white justify-between  transition-all ease-linear"
          }
        >
          <div className="space-x-8 md:space-x-6 lg:space-x-8 flex whitespace-nowrap pl-2 sm:pl-7 md:pl-12 lg:pl-16 ">
            <img
              className="h-6 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <span className="hover:cursor-pointer">Home</span>
            <span className="hover:cursor-pointer invisible sm:visible">TV Shows</span>
            <span className="hover:cursor-pointer invisible sm:visible">Movies</span>
            <span className="hover:cursor-pointer invisible md:visible">New & Popular</span>
            <span className="hover:cursor-pointer invisible lg:visible">My List</span>
          </div>
          <div className="space-x-8 md:space-x-4 lg:space-x-8 flex whitespace-nowrap right-2 sm:right-7 md:right-8 lg:right-16 items-center absolute">
            <span className=" text-xl relative left-[85px] md:left-0">
              <i className="bi bi-search"></i>
            </span>
            <span class="invisible md:visible">Children</span>
            <span className="text-xl">
              <i className="bi bi-bell "></i>
            </span>
            <div className="flex items-center space-x-2">
              <span>
                <img
                  src="data:image/jpeg;base64,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"
                  className="h-8 rounded-md"
                  alt=""
                />
              </span>
              <span>
                <i className="bi bi-caret-down-fill text-xs"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
