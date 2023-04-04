import { newMovies } from "../js/api";

class newFilms extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="movieContiner">
        <h2>New Movies</h2>
        <div class="movieItem"></div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  async connectedCallback() {
    const movies = await newMovies();
    const movieItem = this.shadowRoot.querySelector(".movieItem");

    movies.slice(0, 10).forEach((movie) => {
      const movieList = document.createElement("div");
      movieList.classList.add("movie");
      movieList.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;

      movieItem.appendChild(movieList);
    });
  }
}

customElements.define("new-film", newFilms);