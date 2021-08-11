  
import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");

            movieItemElement.movie = movie;

            this.appendChild(movieItemElement);

            const detailElement = document.createElement("movie-detail");
            detailElement.movie = movie;
            this.append(detailElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${message}</strong>. No Movie Found!
        </div>
        `;
    }
}

customElements.define("movie-list", MovieList);

