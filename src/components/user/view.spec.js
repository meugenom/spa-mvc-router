import View from './view.js'

describe('User View Component', () => {
  let view

  beforeEach(() => {
    view = new View()
  })

  it('should render user data safely with HTML escaping', () => {
    const mockUser = {
      name: '<script>alert("xss")</script>',
      area: 'Berlin',
      description: 'Developer & Designer',
      image: 'https://example.com/avatar.jpg'
    }

    const html = view.appendUser(mockUser)

    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('Berlin')
    expect(html).toContain('https://example.com/avatar.jpg')
  })

  it('should return fallback HTML if user object is missing', () => {
    const html = view.appendUser(null)
    expect(html).toContain('User not found')
  })
})