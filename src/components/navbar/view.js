'use strict'

/**
 * View for component Navbar
 * @returns html to view navbar block
 */

class View {
  appendBar () {
    const view = /* html */`
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-body-tertiary border-bottom shadow-sm">
        <div class="container-fluid px-4">
          <a class="navbar-brand fw-bold ps-2" href="/">SPA JS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ms-lg-3">
              <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/error404">Error404</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary font-weight-bold" href="/register">
                  <strong>Sign up</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>            
    `
    return view
  }
}

export default View