import View from './view.js'

describe('Home View Component', () => {
  it('should render a list of user links', () => {
    const view = new View()
    const mockUsers = [
      { id: '10', name: 'John Doe' },
      { id: '20', name: 'Jane Smith' }
    ]

    const html = view.appendUsers(mockUsers)

    expect(html).toContain('<a href="/user/10">John Doe</a>')
    expect(html).toContain('<a href="/user/20">Jane Smith</a>')
  })
})