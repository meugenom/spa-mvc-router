import Model from './model.js'
import View from './view.js'

/**
 * controller PostShow
 * @param model
 * @param view
 * @return block of html text for some post
 */

class User {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.user = {}
  }

  async render () {
    this.user = await this.model.setUser()
    const section = await this.view.appendUser(this.user)
    return section
  }

  afterRender () {

  }
}

export default User
