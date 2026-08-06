import Model from './model.js'
import Service from '../../services/Services.js'

describe('User Model Component', () => {
  it('should extract user ID from route and fetch user payload', async () => {
    window.history.pushState({}, '', '/user/15')

    const mockUserData = { id: '15', name: 'John Doe', area: 'IT' }
    spyOn(Service.prototype, 'getUser').and.resolveTo(mockUserData)

    const model = new Model()
    const user = await model.setUser()

    expect(Service.prototype.getUser).toHaveBeenCalledWith('15')
    expect(user).toEqual(mockUserData)
  })
})