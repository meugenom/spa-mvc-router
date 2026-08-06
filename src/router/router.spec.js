import Router from './router.js'

describe('Router Component', () => {
  let router

  beforeEach(() => {
    // Set up initial DOM structure before each test execution
    document.body.innerHTML = `
      <header id="header"></header>
      <main id="page"></main>
      <footer id="footer"></footer>
    `
    router = new Router()
  })

  it('should initialize header and footer layout once', async () => {
    await router.initLayout()

    const header = document.getElementById('header')
    const footer = document.getElementById('footer')

    expect(header.innerHTML).toContain('SPA JS')
    expect(footer.innerHTML).toContain('Here will be a contact')
    expect(router.layoutInitialized).toBeTrue()
  })

  it('should render Home page for root URL', async () => {
    window.history.pushState({}, '', '/')

    // Mock API request from Service class
    spyOn(globalThis, 'fetch').and.resolveTo({
      ok: true,
      json: async () => []
    })

    await router.renderPage()
    const content = document.getElementById('page')
    expect(content.innerHTML).toContain('<h1> Home </h1>')
  })

  it('should render Error404 page for unknown routes', async () => {
    window.history.pushState({}, '', '/non-existing-page-123')

    await router.renderPage()
    const content = document.getElementById('page')
    expect(content.innerHTML).toContain('404')
    expect(content.innerHTML).toContain('The page  was not found.')
  })
})