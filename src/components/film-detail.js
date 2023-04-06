import { detailFilms } from "../js/api";

const movieDetail = document.querySelector('#movieDetail');

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

(async () => {
    const movie = await detailFilms(movieId);

    const movieDetailTemplate = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <div class="detail-container">
            <h2 class="txt-detail">${movie.title}</h2>
            <p class="txt-detail">${movie.overview}</p>
            <ul>
                <li class="txt-detail">Release Date: ${movie.release_date}</li>
                <li class="txt-detail">Vote Average: ${movie.vote_average}</li>
                <li class="txt-detail">Runtime: ${movie.runtime} minutes</li>
                <li class="txt-detail">Genres: ${movie.genres.map(genre => genre.name).join(', ')}</li>
            </ul>
        </div>
    `;
    movieDetail.innerHTML = movieDetailTemplate;
})();
