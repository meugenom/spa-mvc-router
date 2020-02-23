class Utils {
  constructor () {
    this.url = location.hash.slice(1).toLowerCase() || '/'
    this.r = this.url.split('/')
    this.request = {
      resource: null,
      id: null,
      verb: null
    }
  }

  parseRequestURL () {
    this.request.resource = this.r[1]
    this.request.id = this.r[2]
    this.request.verb = this.r[3]
    return this.request
  }
}

export default Utils
