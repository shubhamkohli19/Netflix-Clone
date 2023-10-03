import axios from "axios";
import React, { useEffect, useState } from "react";
import "./posterItem.css";

const PosterItem = ({ fetchURL }) => {
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
          <div className="w-[30vw] sm:w-[22vw] lg:w-[14.95vw] flex p-[.14vw] cursor-pointer hover:scale-110 ease-in duration-300 background">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="rounded h-fit "
              alt="https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ3cD-TAmj6o4HamSRl_I4ZIxK-3ikU6PLRGNHr-oCrdO7ZqXEinro5arvsooFmspYkKjnwpd5wcp2EWittrLwXLwmV9XE7E4f96pTx8YdDJmzP3kAE5c1PGqX6Th9Uj7dafur2EHWDTJ4HOZbv8ZSNYp-ubC6M5YhwpQ9wZytaAPCzPUhP5hxcrqpa2xaxhCEOwjPPXZ3XwqUunAOJwspyPS0rB9Oq6OBhWqKrds8lYmzU9IHgWArP_3vqsV70dNW_UN-rEI2NeuDTbYOrLs7MP3uiSOLwuLfPen_QVt5XXtvUnFqQy4F-7UYbLSOO1naOrbDknxXTe10HkDt5JnwKGgqPYqOy8tsxkim2vCDYA-qaGZpc.jpg?r=6ab"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PosterItem;
