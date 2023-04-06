import { detailTveseries } from "../js/api";

const tvDetail = document.querySelector('#movieDetail');

const urlParams = new URLSearchParams(window.location.search);
const tvId = urlParams.get('id');

(async () => {
    const tv = await detailTveseries(tvId);

    const tvDetailTemplate = `
        <img src="https://image.tmdb.org/t/p/w500/${tv.poster_path}" alt="${tv.name}">
        <div class="detail-container">
            <h2 class="txt-detail">${tv.name}</h2>
            <p class="txt-detail">${tv.overview}</p>
            <ul>
                <li class="txt-detail">First Air Date: ${tv.first_air_date}</li>
                <li class="txt-detail">Vote Average: ${tv.vote_average}</li>
                <li class="txt-detail">Number of Episodes: ${tv.number_of_episodes}</li>
                <li class="txt-detail">Number of Seasons: ${tv.number_of_seasons}</li>
                <li class="txt-detail">Genres: ${tv.genres.map(genre => genre.name).join(', ')}</li>
            </ul>
        </div>
    `;
    tvDetail.innerHTML = tvDetailTemplate;
})();
