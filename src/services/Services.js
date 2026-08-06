class Service {
  constructor () {
    this.baseUrl = 'https://62446a733da3ac772b0f8517.mockapi.io/api/v1/users'
    this.options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
  }

  async getUsers () {
    try {
      const response = await fetch(this.baseUrl, this.options)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    } catch (err) {
      console.error('Error getting list of users:', err)
      return []
    }
  }

  async getUser (id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, this.options)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    } catch (err) {
      console.error('Error getting user info:', err)
      return null
    }
  }
}

export default Service