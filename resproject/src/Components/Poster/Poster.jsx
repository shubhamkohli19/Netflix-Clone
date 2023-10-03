import React, { useEffect, useState } from "react";
import "./poster.css";
import { useRef } from "react";
import PosterItem from "../PosterItem/PosterItem";

const Poster = ({ title, fetchURL }) => {
  const props = fetchURL;
  const [slideNumber, setSlideNumber] = useState(0);
  const [leftEnd, setLeftEnd] = useState(true);
  const [rightEnd, setRightEnd] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 69;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 14) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
    if (slideNumber > 0) {
      setLeftEnd(false);
    }
    if (slideNumber === 0) {
      setLeftEnd(true);
    }
    if (slideNumber < 14) {
      setRightEnd(false);
    }
    if (slideNumber === 14) {
      setRightEnd(true);
    }
  };
  return (
    <div className="text-white">
      <div className="px-[4.9vw] font-semibold text-[15px] lg:text-[1.5vw] h-auto w-fit">
        {title}
      </div>
      <div className="flex space-x-[5px] mb-[1vw] overflow-x-scroll overflow-y-hidden md:overflow-hidden container1">
        <div
          className="bg-black flex items-center justify-around min-w-[4.36vw] bg-opacity-60 left z-10 h-[22.2vw] m-auto opacity-0 md:opacity-100"
          onClick={() => handleClick("left")}
          style={{ opacity: leftEnd && "0" }}
        >
          <i
            className="bi bi-arrow-left-short text-4xl leftArrow"
            style={{ display: leftEnd && "none" }}
          ></i>
        </div>
        <div className="flex space-x-[5px] container2" ref={listRef}>
          <PosterItem fetchURL={props} />
        </div>
        <div
          className="bg-black flex items-center justify-around min-w-[4.36vw] bg-opacity-60 absolute opacity-0 md:opacity-100 right-0 h-[22.2vw] right my-5"
          onClick={() => handleClick("right")}
          style={{ opacity: rightEnd && 0 }}
        >
          <i
            className="bi bi-arrow-right-short text-4xl rightArrow"
            style={{ display: rightEnd && "none" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Poster;
