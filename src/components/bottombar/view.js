'use strict'

/**
 * View for component BottomBar
 * @returns html to view bottom block
 */

class View {
  appendBar () {
    const view = /* html */`
      <nav class="navbar fixed-bottom navbar-light bg-body-tertiary border-top">
        <div class="container-fluid px-4">
          <a class="navbar-brand text-muted fs-6 ps-2" href="/">Here will be a contact</a>
        </div>
      </nav>        
    `
    return view
  }
}

export default View