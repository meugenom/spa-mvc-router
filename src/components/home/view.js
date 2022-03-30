'use strict'

/**
 * View for component Home
 * @param posts
 * @returns html view for home page
 */

class View {
  appendUsers (users) {
    const view = /* html */`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${users.map(user =>
                        /* html */`<li><a href="#/user/${user.id}">${user.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>`
    return view
  }
}

export default View
