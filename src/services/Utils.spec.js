import Utils from './Utils.js'

describe('Utils Service', () => {
  it('should parse root URL correctly', () => {
    window.history.pushState({}, '', '/')
    const utils = new Utils()
    const request = utils.parseRequestURL()

    expect(request.resource).toBeNull()
    expect(request.id).toBeNull()
    expect(request.verb).toBeNull()
  })

  it('should parse complex route with resource and id', () => {
    window.history.pushState({}, '', '/user/42')
    const utils = new Utils()
    const request = utils.parseRequestURL()

    expect(request.resource).toBe('user')
    expect(request.id).toBe('42')
    expect(request.verb).toBeNull()
  })
})