import axios from 'axios';

const API_KEY = 'd512e52ea3248a19b019f36b716c3bd1';
const BASE_URL = 'https://api.themoviedb.org/3';

const getRandomMovies = (movies) => {
    const randomMovies = [];
    while (randomMovies.length < 10) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      if (!randomMovies.includes(randomMovie)) {
        randomMovies.push(randomMovie);
      }
    }
    return randomMovies;
  };

export const newMovies = async () =>{
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    const response  = await axios.get(url);
    return getRandomMovies(response.data.results);
};

export const popularMovies = async () =>{
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return getRandomMovies(response.data.results);
};

export const superHeroMovies = async () => {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=id-US&page=1`;
    const response = await axios.get(url);
    return getRandomMovies(response.data.results);
};

export const indonesianFilms = async () =>{
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=id&language=id-US&page=1`;;
    const response = await axios.get(url);
    return getRandomMovies(response.data.results);
}

export const detailFilms = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=id-US`;
    const response = await axios.get(url);
    return response.data;
};

export const detailTveseries = async (tvId) => {
    const url = `${BASE_URL}/tv/${tvId}?api_key=${API_KEY}&language=id-US`;
    const response = await axios.get(url);
    return response.data;
};  

export const tvSeries = async () =>{
    const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
    const response = await axios.get(url);
    return response.data.results;
};

