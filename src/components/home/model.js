'use strict'
import Service from '../../services/Servises.js'

/**
 * Model for component Home
 * @returns list of posts
 */

class Model {
  constructor () {
    this.users = {}
  }

  async setUsers () {
    this.users = await new Service().getUsers()
    return this.users
  }
}

export default Model
