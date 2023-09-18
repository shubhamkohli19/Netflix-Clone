import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <div className="h-[9vh] w-[100%] fixed top-0 z-50">
        <div
          className={
            isScrolled
              ? "bg-black h-[9vh] w-[100%]  flex items-center text-white justify-between  transition-all ease-linear"
              : "bg-none h-[9vh] w-[100%]  flex items-center text-white justify-between  transition-all ease-linear"
          }
        >
          <div className=" space-x-8 flex whitespace-nowrap pl-16">
            <img
              className="h-6 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <span className="hover:cursor-pointer">Home</span>
            <span className="hover:cursor-pointer">TV Shows</span>
            <span className="hover:cursor-pointer">Movies</span>
            <span className="hover:cursor-pointer">New & Popular</span>
            <span className="hover:cursor-pointer">My List</span>
          </div>
          <div className="space-x-6 flex whitespace-nowrap items-center pr-10">
            <span className=" text-xl">
              <i className="bi bi-search"></i>
            </span>
            <span>Children</span>
            <span className="text-xl">
              <i className="bi bi-bell "></i>
            </span>
            <div className="flex items-center space-x-2">
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKanpKIJG-cjYCmNP3YGLagjbBfKxeVpVPVF1PHIdVUQ&s"
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
