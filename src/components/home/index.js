'use strict'
/**
 * controller Home
 * @param model
 * @param view
 * @return posts
 */

import Model from './model.js'
import View from './view.js'

class Home {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.posts = {}
  }

  async render () {
    this.posts = await this.model.setPosts()
    const section = await this.view.appendPosts(this.posts)
    return section
  }

  afterRender () {
  }
}

export default Home
