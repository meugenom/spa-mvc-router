class Service {
  constructor () {
    this.options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
  }

  async getUsers () {
    try {
      const response = await fetch('https://62446a733da3ac772b0f8517.mockapi.io/api/v1/users', this.options)
      const json = await response.json()
      return json
    } catch (err) {
      console.log('Error getting list of users', err)
    }
  }

  async getUser (id) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('https://62446a733da3ac772b0f8517.mockapi.io/api/v1/users/' + id, this.options)
      const json = await response.json()
      // console.log(json)
      return json
    } catch (err) {
      console.log('Error getting user info', err)
    }
  }
}

export default Service
