import { tvSeries } from "../js/api";
import style from "../js/style";

class AnimeList extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        const template = document.createElement('template');
        template.innerHTML =`
        ${style}
        <div class="movieContiner">
            <div class="movieItem">
            
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };
    async connectedCallback(){
        const animes = await tvSeries();
        const animeItem = this.shadowRoot.querySelector('.movieItem');

        animes.slice(0, 20).forEach((anime) =>{
            const animeLists = document.createElement('div');
            animeLists.classList.add('movie');
            animeLists.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${anime.poster_path}" alt="${anime.name}">
            <h3>${anime.name}</h3>
            <p>${anime.first_air_date}</p>
            <button class="btn-detail" data-movie-id="${anime.id}">Detail</button>
            `;
            animeItem.appendChild(animeLists);
        });
        const detailButtons = this.shadowRoot.querySelectorAll('.btn-detail');
        detailButtons.forEach(button => {
            button.addEventListener('click', () => {
                const movieId = button.getAttribute('data-movie-id');
                window.location.href = `page/film.html?id=${movieId}`;
            });
        });
    }
};

customElements.define('anime-list', AnimeList);
