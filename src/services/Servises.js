class Service {
  constructor () {
    this.options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
  }

  async getListPosts () {
    try {
      const response = await fetch('https://5e470be6fd1af600145de975.mockapi.io/api/v1/posts', this.options)
      const json = await response.json()
      return json
    } catch (err) {
      console.log('Error getting documents', err)
    }
  }

  async getPost (id) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('https://5e470be6fd1af600145de975.mockapi.io/api/v1/posts/' + id, options)
      const json = await response.json()
      // console.log(json)
      return json
    } catch (err) {
      console.log('Error getting documents', err)
    }
  }
}

export default Service
