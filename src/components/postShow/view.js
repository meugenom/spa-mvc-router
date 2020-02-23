'use strict'

/**
 * View for postShow controller
 */

class View {
  constructor () {
    this.document = document
    this.section = this.createElement('section', 'section')
    this.name = this.createElement('h1', 'post_name')
    this.section.append(this.name)
    this.description = this.createElement('p', 'post_description')
    this.section.append(this.description)

    this.avatar = this.createElement('img', 'post_avatar')
    this.avatar.className = 'img-fluid  img-thumbnail'
    this.section.append(this.avatar)

    this.post = {}
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

  appendPost (post) {
    console.log(post)
    this.setElement('post_name', post.name)
    this.setElement('post_description', post.description)
    this.setImage('post_avatar', post.avatar)
    return this.section.outerHTML
  }
}

export default View
