import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ListItem.css";

const ListItem = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="flex h-fit py-[1.3vw] relative">
      {movies.map((item) => {
        return (
          <a href={`https://www.themoviedb.org/movie/${item.id}`} key={item.id} className="w-[45vw] sm:w-[22vw] lg:w-[14.95vw]  flex-col p-[.14vw] cursor-pointer hover:scale-125 ease-in duration-500">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              className="rounded h-fit "
              alt="https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ3cD-TAmj6o4HamSRl_I4ZIxK-3ikU6PLRGNHr-oCrdO7ZqXEinro5arvsooFmspYkKjnwpd5wcp2EWittrLwXLwmV9XE7E4f96pTx8YdDJmzP3kAE5c1PGqX6Th9Uj7dafur2EHWDTJ4HOZbv8ZSNYp-ubC6M5YhwpQ9wZytaAPCzPUhP5hxcrqpa2xaxhCEOwjPPXZ3XwqUunAOJwspyPS0rB9Oq6OBhWqKrds8lYmzU9IHgWArP_3vqsV70dNW_UN-rEI2NeuDTbYOrLs7MP3uiSOLwuLfPen_QVt5XXtvUnFqQy4F-7UYbLSOO1naOrbDknxXTe10HkDt5JnwKGgqPYqOy8tsxkim2vCDYA-qaGZpc.jpg?r=6ab"
            />
            <div className="h-full w-full text-[12px] sm:text-[15px] md:text[1.5vw] background flex items-center text-center rounded justify-center opacity-0 hover:opacity-100 absolute top-6 overflow-hidden hover:bg-black hover:top-[3.5px] hover:bg-opacity-30 ease-in duration-500">
              {item.title}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ListItem;
