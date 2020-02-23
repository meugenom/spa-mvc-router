'use strict'
import Model from './model.js'
import View from './view.js'

/**
 * controller Navbar
 * @param model
 * @param view
 * @return html to view navbar
 */

class Navbar {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.navbar = ''
  }

  async render () {
    this.navbar = await this.view.appendBar()
    return this.navbar
  }

  afterRender () { }
}

export default Navbar
