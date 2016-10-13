/* global localStorage */
import React from 'react'

/**
 * Ce HOC permet de stocker les propriétés d'un composant à chaque fois qu'elles
 * sont mises à jour
 *
 * @param propsToStorage (object: props) -> mixed
 *                       Prend en paramètre les propriétés données au composant
 *                       Retourne les données à mettre dans le localStorage
 *                       /!\ les données seront passées dans JSON.stringify
 * @param storageKey     string
 *                       La clé du localStorage utilisée pour stocker les données
 */
export default ({ propsToStorage, storageKey }) => (BaseComponent) => {
  return class extends React.Component {
    componentWillMount () {
      this.storeData()
    }

    componentWillUpdate () {
      this.storeData()
    }

    storeData () {
      const storedData = propsToStorage(this.props)
      if (storedData) {
        localStorage.setItem(storageKey, JSON.stringify(storedData))
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }
}
