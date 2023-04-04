import { superHeroMovie } from "../js/api";

class superHeroFilms extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
        <div class="movieContiner">
            <h2>Super Hero Movies</h2>
            <div class="movieItem">
        
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    };
    async connectedCallback(){
        const movie  = await superHeroMovie();
        const movieItem = this.shadowRoot.querySelector('.movieItem');

        movie.slice(0, 10).forEach((movie) =>{
            const movieList = document.createElement('div');
            movieList.classList.add('movie');
            movieList.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            `;
            movieItem.appendChild(movieList);
        });
    };
};

customElements.define('superhero-film', superHeroFilms);
