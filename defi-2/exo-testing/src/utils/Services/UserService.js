/* global localStorage */
import BaseService from './BaseService'

/*
 * Ce service est un exemple d'implémentation de service
 * Il étant le baseService et y ajoute des méthodes pour récupérer le nom de
 * l'utilisateur et le mettre à jour
 */
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
