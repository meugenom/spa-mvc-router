import Home from "./../components/home/index.js";
import User from "./../components/user/index.js";
import Bottombar from "./../components/bottombar/index.js";
import Navbar from "./../components/navbar/index.js";
import About from "./../components/about/index.js";
import Error404 from "./../components/error404/index.js";
import Register from "./../components/register/index.js";

import Utils from "./../services/Utils.js";

class Router {
  constructor() {
    this.routes = {
      "/": new Home(),
      "/about": new About(),
      "/user/:id": new User(),
      "/register": new Register(),
    };

    this.header = document.getElementById("header");
    this.content = document.getElementById("page");
    this.footer = document.getElementById("footer");
    this.layoutInitialized = false;
  }

  async initLayout() {
    if (this.layoutInitialized) return;

    if (this.header) {
      const navbar = new Navbar();
      this.header.innerHTML = await navbar.render();
      await navbar.afterRender();
    }

    if (this.footer) {
      const bottombar = new Bottombar();
      this.footer.innerHTML = await bottombar.render();
      await bottombar.afterRender();
    }

    this.layoutInitialized = true;
  }

  async renderPage() {
    if (!this.layoutInitialized) {
      await this.initLayout();
    }

    const request = new Utils().parseRequestURL();
    const parsedURL =
      (request.resource ? "/" + request.resource : "/") +
      (request.id ? "/:id" : "") +
      (request.verb ? "/" + request.verb : "");

    const page = this.routes[parsedURL]
      ? this.routes[parsedURL]
      : new Error404();

    if (this.content) {
      this.content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default Router;
