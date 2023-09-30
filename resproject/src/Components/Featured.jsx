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
          <div className=" w-[92.5vw] absolute md:top-[30%] lg:top-[50%] sm:top-[20%] top-[5%] ml-[3vw] text-white space-y-4 bg-black bg-opacity-30 p-5  rounded-md">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">
              {movie?.title}
            </div>
            <div className=" font-medium text-xs sm:text-base md:text-lg lg:text-xl w-[90.5vw] text-slate-200">
              {movie?.overview}
            </div>
            <div className=" flex items-start text-lg font-semibold space-x-4 ">
              <button className=" text-black bg-white px-5 py-1 pr-7 flex items-center rounded">
                <i className="bi bi-play-fill text-4xl mr-1"></i>Play
              </button>
              <button className=" text-white bg-gray-600 px-5 py-[6px] flex items-center rounded bg-opacity-50">
                <i className="bi bi-info-circle text-3xl mr-3"></i>More Info
              </button>
            </div>
            <div className="text-slate-200">
              Released: {movie?.release_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
