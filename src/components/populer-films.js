import { popularMovies } from "../js/api";
import style from "../js/style";

class popularFilms extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
        ${style}
         <div class="movieContiner">
            <div class="movieItem">
            
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    };
    async connectedCallback(){
        const movie = await popularMovies();
        const movieItem  = this.shadowRoot.querySelector('.movieItem');

        movie.slice(0, 12).forEach((movie) =>{
            const movieList = document.createElement('div');
            movieList.classList.add('movie');
            movieList.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
            <button class="btn-detail" data-movie-id="${movie.id}">Detail</button>
            `;
            
            movieItem.appendChild(movieList);
        });

        const detailButtons = this.shadowRoot.querySelectorAll('.btn-detail');
        detailButtons.forEach(button => {
            button.addEventListener('click', () => {
                const movieId = button.getAttribute('data-movie-id');
                window.location.href = `page/film.html?id=${movieId}`;
            });
        });
    };
};

customElements.define('populer-film', popularFilms);
