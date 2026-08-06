import Service from './Services.js'

describe('Service Class', () => {
  let service

  beforeEach(() => {
    service = new Service()
  })

  it('should fetch user list successfully', async () => {
    const mockUsers = [
      { id: '1', name: 'Alex' },
      { id: '2', name: 'Maria' }
    ]

    spyOn(globalThis, 'fetch').and.resolveTo({
      ok: true,
      json: async () => mockUsers
    })

    const users = await service.getUsers()

    expect(globalThis.fetch).toHaveBeenCalledWith(service.baseUrl, service.options)
    expect(users).toEqual(mockUsers)
  })

  it('should return empty array when fetch fails', async () => {
    spyOn(console, 'error')
    spyOn(globalThis, 'fetch').and.resolveTo({
      ok: false,
      status: 500
    })

    const users = await service.getUsers()

    expect(users).toEqual([])
    expect(console.error).toHaveBeenCalled()//check loggers output
  })
})