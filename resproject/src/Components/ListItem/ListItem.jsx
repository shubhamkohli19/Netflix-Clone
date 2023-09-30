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
    <div className="flex h-fit py-5 relative">
      {movies.map((item, id) => {
        return (
          <div className="w-[230px] min-h-[125px] flex-col p-[3px] cursor-pointer hover:scale-125 ease-in duration-500">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              className="rounded h-fit "
              alt="https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ3cD-TAmj6o4HamSRl_I4ZIxK-3ikU6PLRGNHr-oCrdO7ZqXEinro5arvsooFmspYkKjnwpd5wcp2EWittrLwXLwmV9XE7E4f96pTx8YdDJmzP3kAE5c1PGqX6Th9Uj7dafur2EHWDTJ4HOZbv8ZSNYp-ubC6M5YhwpQ9wZytaAPCzPUhP5hxcrqpa2xaxhCEOwjPPXZ3XwqUunAOJwspyPS0rB9Oq6OBhWqKrds8lYmzU9IHgWArP_3vqsV70dNW_UN-rEI2NeuDTbYOrLs7MP3uiSOLwuLfPen_QVt5XXtvUnFqQy4F-7UYbLSOO1naOrbDknxXTe10HkDt5JnwKGgqPYqOy8tsxkim2vCDYA-qaGZpc.jpg?r=6ab"
            />
            <div className="h-[125px] w-[225px] background flex items-center text-center rounded justify-center opacity-0 hover:opacity-100 absolute top-6 overflow-hidden hover:bg-black hover:top-[3.5px] hover:bg-opacity-30 ease-in duration-500">
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
