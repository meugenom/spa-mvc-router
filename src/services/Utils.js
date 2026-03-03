class Utils {

  url = null;
  r = [];
  request = {
     resource: null,
     id: null, 
     verb: null
    };

  
  constructor () {

    this.url = location.pathname.toLowerCase() || '/'
    this.r = this.url.split('/')
    this.request = {
      resource: null,
      id: null,
      verb: null
    }
  }

  parseRequestURL () {

    this.request.resource = this.r[1] || null;
    this.request.id = this.r[2] || null;
    this.request.verb = this.r[3] || null;
    
    return this.request
  }
}

export default Utils
