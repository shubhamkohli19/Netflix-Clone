import Featured from "../Components/Featured/Featured";
import List from "../Components/List/List";
import Navbar from "../Components/Navbar/Navbar";
import Poster from "../Components/Poster/Poster";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Poster title="Netflix Originals" fetchURL={requests.requestOriginals} />
      <Poster title="Critically Acclaimed TV Shows" fetchURL={requests.requestTrendingMovie} />
      <Poster title="Top Rated TV & Animes" fetchURL={requests.requestTVrated} />
      <List title="Arriving Soon" fetchURL={requests.requestUpcoming} />
      <List title="Trending" fetchURL={requests.requestTrending} />
      <List title="The Classics" fetchURL={requests.requestMovieRated} />
      <List title="Popular On Netflix" fetchURL={requests.requestPopular} />
      <List title="TV On Air" fetchURL={requests.requestTVonAir} />
    </>
  );
};

export default Home;
