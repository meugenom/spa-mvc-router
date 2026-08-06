'use strict'

class View {
  escapeHtml (str) {
    if (!str) return ''
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  appendUser (user) {
    if (!user) return '<section class="section"><p>User not found</p></section>'

    return /* html */`
      <section class="section">
        <h1 id="user_name">${this.escapeHtml(user.name)}</h1>
        <p id="user_area">${this.escapeHtml(user.area)}</p>
        <p id="user_description">${this.escapeHtml(user.description)}</p>
        <img id="user_image" class="img-fluid img-thumbnail" src="${this.escapeHtml(user.image)}" alt="${this.escapeHtml(user.name)}" />
      </section>
    `
  }
}

export default View