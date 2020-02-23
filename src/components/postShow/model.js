import Utils from '../../services/Utils.js'
import Service from '../../services/Servises.js'

class Model {
  constructor () {
    this.post = {}
  }

  async setPost () {
    const request = new Utils().parseRequestURL()
    this.post = await new Service().getPost(request.id)
    return this.post
  }
}

export default Model
