import BaseService from './BaseService'

/*
 * Ce service est un exemple d'implémentation de service
 * Il étant le baseService et y ajoute des méthodes pour récupérer le nom de
 * l'utilisateur et le mettre à jour
 */
export default () => {
  const baseService = BaseService()

  return Object.assign(
    {},
    baseService,
    {
      // Ajouter les propriétés nécessaires à l'utilisation du service
      // Rappel : le but est de pouvoir stocker et récupérer le nom d'un utilisateur
      TODO
    }
  )
}
