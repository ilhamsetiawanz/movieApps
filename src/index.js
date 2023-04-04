import './components/new-films.js';
import './components/populer-films.js';
import './components/superhero-films.js';
import './components/search.js'

const newFilm = document.createElement('new-film');
const populerFilm = document.createElement('populer-film');
const superHero = document.createElement('superhero-film');


const searchFilm = document.createElement('search-film');
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchForm.querySelector('input').value;
  if (!query) {
    return;
  }

  await searchResult.search(query);
  document.getElementById('searchResult').appendChild(searchFilm);
});




document.getElementById("newFilm").appendChild(newFilm);
document.getElementById("populer").appendChild(populerFilm);
document.getElementById('superHero').appendChild(superHero);
