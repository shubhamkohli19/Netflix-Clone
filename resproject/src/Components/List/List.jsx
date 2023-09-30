import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import "./list.css";
import { useRef } from "react";


const List = ({ title , fetchURL}) => {
  const props = fetchURL;
  const [slideNumber, setSlideNumber] = useState(0);
  const [leftEnd, setLeftEnd] = useState(true);
  const [rightEnd, setRightEnd] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 73;
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
    if (slideNumber === 14){
      setRightEnd(true);
    }
  };
  return (
    <div className="text-white">
      <div className="px-[76px] py-3  font-semibold text-[22px] h-auto w-fit">
        {title}
      </div>
      <div className="flex space-x-[5px] mb-4 overflow-hidden container1">
        <div
          className="bg-black flex items-center justify-around min-w-[4.4%] bg-opacity-60 left z-10 h-[130px] m-auto" 
          onClick={() => handleClick("left")}
          style={{ opacity: leftEnd && "0" }}
        >
          <i
            className="bi bi-arrow-left-short text-4xl leftArrow"
            style={{ display: leftEnd && "none" }}
          ></i>
        </div>
        <div className="flex space-x-[5px] container2" ref={listRef}>
          <ListItem  fetchURL={props}/>
        </div>
        <div
          className="bg-black flex items-center justify-around min-w-[4.4%] bg-opacity-60 absolute right-0 min-h-[130px] right my-5"
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

export default List;
