import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Featured = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="mb-16">
      <div className="w-full h-full ">
        <div className=" bg-gradient-to-r from-black">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={"Rendering Issue"}
            className="w-full h-full object-cover"
          />
          <div className="w-fit md:w-[92.5vw] absolute top-[13%] md:top-[20%] lg:top-[50%] sm:top-[20%]  ml-[3vw] text-white space-y-4 bg-black bg-opacity-30 p-5  rounded-md">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">
              {movie?.title}
            </div>
            <div className=" font-medium text-xs sm:text-base md:text-lg lg:text-xl w-[90.5vw] text-slate-200 hidden md:block">
              {movie?.overview}
            </div>
            <div className=" flex items-start text-xs sm:text-sm md:text-base lg:text-lg font-semibold space-x-2 md:space-x-4">
              <button className=" text-black bg-white px-1 sm:px-2 md:px-4 lg:px-5 md:py-[6px] pr-2 sm:pr-4 md:pr-6 lg:pr-7 flex items-center rounded">
                <i className="bi bi-play-fill text-2xl md:text-3xl lg-text-4xl mr-1"></i>Play
              </button>
              <button className=" text-white bg-gray-600 px-1 sm:px-2 md:px-4 lg:px-5 md:py-[6px] flex items-center rounded bg-opacity-50">
                <i className="bi bi-info-circle text-2xl md:text-3xl lg:text-4xl mr-3"></i>More Info
              </button>
            </div>
            <div className="text-slate-200 hidden lg:block">
              Released: {movie?.release_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
