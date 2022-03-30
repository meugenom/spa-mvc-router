'use strict'

/**
 * View for postShow controller
 */

class View {
  constructor () {
    this.document = document
    this.section = this.createElement('section', 'section')
    this.name = this.createElement('h1', 'user_name')
    this.section.append(this.name)
    this.area = this.createElement('p', 'user_area')
    this.section.append(this.area)
    this.description = this.createElement('p', 'user_description')
    this.section.append(this.description)

    this.image = this.createElement('img', 'user_image')
    this.image.className = 'img-fluid  img-thumbnail'
    this.section.append(this.image)

    this.user = {}
  }

  createElement (tag, attribute) {
    const element = this.document.createElement(tag)
    element.setAttribute('id', attribute)
    return element
  }

  getElement (selector) {
    const element = this.section.querySelector('#' + selector)
    return element
  }

  setElement (selector, text) {
    const element = this.getElement(selector)
    element.innerHTML = text
  }

  setImage (selector, url) {
    const element = this.getElement(selector)
    element.src = url
  }

  appendUser (user) {
    console.log(user)
    this.setElement('user_name', user.name)
    this.setElement('user_description', user.description)
    this.setElement('user_area', user.area)
    this.setImage('user_image', user.image)
    return this.section.outerHTML
  }
}

export default View
