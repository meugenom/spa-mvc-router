import Model from './model.js'
import View from './view.js'

/**
 * controller PostShow
 * @param model
 * @param view
 * @return block of html text for some post
 */

class PostShow {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.post = {}
  }

  async render () {
    this.post = await this.model.setPost()
    const section = await this.view.appendPost(this.post)
    return section
  }

  afterRender () {

  }
}

export default PostShow
