'use strict'
/**
 * controller Home
 * @param model
 * @param view
 * @return users
 */

import Model from './model.js'
import View from './view.js'

class Home {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.users = {}
  }

  async render () {
    this.users = await this.model.setUsers()
    const section = await this.view.appendUsers(this.users)
    return section
  }

  afterRender () {
  }
}

export default Home
