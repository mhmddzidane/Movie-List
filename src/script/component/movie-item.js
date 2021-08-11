import "jquery/dist/jquery.min.js";
import "./movie-detail";

class MovieItem extends HTMLElement {

    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div id="${this._movie.id}" class="card overflow-hidden rounded-4 text-center text-white bg-dark h-100" type="button" data-toggle="modal" data-target="#exampleModalCenter">
        <img class="p-2 card-img rounded-4 card-img-top" src="${this._movie.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._movie.poster_path : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}" alt="Poster Movie">
          
        <div class="card-header grad1">
            <h5 class="card-title " style="height: 60px">${this._movie.title}</h5>
            <p class="card-subtitle ">${this._movie.release_date.substring(0, 4)}</p>
        </div>

        <div class="card-body">
           <p class="card-text">${this._movie.overview}</p>
          </div>

        <div class="card-footer">
          <button class="btn btn-warning w-100" id="buttonDetail" data-bs-toggle="modal" data-bs-target="#showDetail${this._movie.id}">Detail</button>
        </div>

        </div>
      `;
    }
  }
  
  customElements.define("movie-item", MovieItem);