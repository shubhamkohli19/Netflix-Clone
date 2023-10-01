const API_KEY = "83a041f4d6f1357896cacbd03740de8a";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestMovieRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
  requestTrendingTV: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  requestTVrated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTVonAir: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  requestOriginals: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
