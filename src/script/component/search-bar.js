class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div id="search-container">
            <div class="row ms-4 py-3">
                <div class="col">
                    <div class="form-group">
                        <input id="searchElement" class="form-control input-lg" rows="3" type="search" placeholder="Search Movie" aria-label="Search">
                    </div>
                </div>
                <div class="col">
                    <button id="searchButtonElement" class="btn btn-warning" type="submit">Search</button>
                </div>
            </div>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);