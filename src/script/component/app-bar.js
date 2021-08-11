class AppBar extends HTMLElement {

    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = ` 
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand ms-5" href="http://localhost:8080/"><h1><b class="text-warning">Movie</b><b class="text-light">List</b></h1></a>
              <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                  <search-bar></search-bar>
                  </div>
            </div>
          </nav>
      `;
    }
  }
  
  customElements.define("app-bar", AppBar);