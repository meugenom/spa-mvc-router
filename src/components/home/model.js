'use strict'
import Service from '../../services/Servises.js'

/**
 * Model for component Home
 * @returns list of posts
 */

class Model {
  constructor () {
    this.posts = {}
  }

  async setPosts () {
    this.posts = await new Service().getListPosts()
    return this.posts
  }
}

export default Model
