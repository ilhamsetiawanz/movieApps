import './components/new-films.js';
import './components/populer-films.js';
import './components/superhero-films.js';
import './components/local-film.js';
import './components/netflix-list.js';
import './components/film-detail.js';
import './components/tvSeries-detail.js';


const newFilm = document.createElement('new-films');
const populerFilm = document.createElement('populer-film');
const superHero = document.createElement('superhero-film');
const localFims = document.createElement('local-film');
const filmDetails = document.createElement('movieDetail');
const tvDetails = document.createElement('tvDetails');
const animeList = document.createElement('anime-list');



document.getElementById('newFilm').appendChild(newFilm);
document.getElementById('populer').appendChild(populerFilm);
document.getElementById('superHero').appendChild(superHero);
document.getElementById('localFilm').appendChild(localFims);
document.getElementById('netflix').appendChild(animeList);



document.getElementById('movieDetail').appendChild(filmDetails);
document.getElementById('movieDetail').appendChild(tvDetails);


