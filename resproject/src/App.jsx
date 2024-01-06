import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import TV from "./Pages/TV";
import MoviePage from "./Pages/MoviePage";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home className=" bg-slate-600" />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
