import axios from 'axios';

const API_KEY = '26c1544c6924f813566b7be371b4019b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}


export const getSearchMovies = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en&page=1`
  );
  return response.data;
};


export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  
  return response.data;
}


export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

  return response.data;
}

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  
    return response.data;
  }
