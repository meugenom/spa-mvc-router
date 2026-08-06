import View from './view.js'

describe('Navbar View Component', () => {
  it('should render navigation layout with required route links', () => {
    const view = new View()
    const html = view.appendBar()

    expect(html).toContain('href="/"')
    expect(html).toContain('href="/about"')
    expect(html).toContain('href="/register"')
    expect(html).toContain('SPA JS')
  })
})