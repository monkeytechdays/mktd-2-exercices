import BaseService from './BaseService'

export default () => {
  let user = localStorage.getItem('username')
  const baseService = BaseService()

  return Object.assign(
    {},
    baseService,
    {
      isConnected: () => user !== null,
      setUser: (newUser) => {
        user = newUser
        localStorage.setItem('username', newUser)
        baseService.notifySubscriptions()
      },
      getData: () => user
    }
  )
}
