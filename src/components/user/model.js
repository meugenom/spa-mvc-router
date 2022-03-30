import Utils from '../../services/Utils.js'
import Service from '../../services/Servises.js'

class Model {
  constructor () {
    this.user = {}
  }

  async setUser () {
    const request = new Utils().parseRequestURL()
    this.user = await new Service().getUser(request.id)
    return this.user
  }
}

export default Model
