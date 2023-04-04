import axios from 'axios';

const API_KEY = 'd512e52ea3248a19b019f36b716c3bd1';
const BASE_URL = 'https://api.themoviedb.org/3';

export const newMovies = async () =>{
    const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    const respons  = await axios.get(url);
    return respons.data.result
};

export const popularMovie = async ( ) =>{
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language-en-US&page=1`;
    const respons = await axios.get(url);
    return respons.data.result;
};

export const superHeroMovie = async () => {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US&page=1`;
    const respons = await axios.get(url);
    return respons.data.result;
};

export const searchMovies = async (query) =>{
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`;
    const respons = await axios.get(url);
    return respons.data.result;
}