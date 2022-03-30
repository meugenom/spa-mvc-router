import Home from './../components/home/index.js'
import User from './../components/user/index.js'
import Bottombar from './../components/bottombar/index.js'
import Navbar from './../components/navbar/index.js'
import About from './../components/about/index.js'
import Error404 from './../components/error404/index.js'
import Register from './../components/register/index.js'

import Utils from './../services/Utils.js'

class Router {
  constructor () {
    this.routes = {
      '/': new Home(),
      '/about': new About(),
      '/user/:id': new User(),
      '/register': new Register()
    }

    // start
    this.header = null || document.getElementById('header')
    this.content = null || document.getElementById('page')
    this.footer = null || document.getElementById('footer')
    this.init()
  }

  async init () {
    // Render the Header and footer of the page
    this.header.innerHTML = await new Navbar().render()
    await new Navbar().afterRender()

    this.footer.innerHTML = await new Bottombar().render()
    await new Bottombar().afterRender()

    const request = new Utils().parseRequestURL()
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    const page = this.routes[parsedURL] ? this.routes[parsedURL] : new Error404()

    this.content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default Router
