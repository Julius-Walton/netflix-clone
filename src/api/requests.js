const API_KEY = 'e58e0db59857ad066933855512dd9f89';
const YOUTUBE = 'AIzaSyAOYQuvVvvyKvtpZIcA88zgsVqa_c9Lc7g';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTrailers: `https://youtube.googleapis.com/youtube/v3/search?key=${YOUTUBE}`,
  baseURL: 'https://image.tmdb.org/t/p/original/',
};
export default requests;
