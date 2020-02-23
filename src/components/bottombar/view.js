'use strict'
/**
 * View for component BottomBar
 * @returns html to view bottom block
 */

class View {
  appendBar () {
    const view = /* html */`
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Here will be a contact</a>
        </nav>        
        `
    return view
  }
}

export default View
