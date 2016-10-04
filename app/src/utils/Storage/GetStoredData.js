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
 * @param [checkResult]  (object: props) -> (mixed: data) -> bool
 *                       Prend en paramètre les propriétés du composant passées en amont
 *                       Les données qui viennent du localStorage
 *                       Renvoie si oui ou non c'est les données que l'on s'attendait à avoir. Si
 *                       ce n'est pas le cas, les propriétés de base seront utilisées.
 */
export default ({ storageKey, storageToProps, checkResult }) => (BaseComponent) => {
  return class extends React.Component {
    constructor () {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount () {
      const data = JSON.parse(localStorage.getItem(storageKey))
      if (typeof checkResult !== 'function' || (data && checkResult(this.props)(data))) {
        this.setState({ data: data })
      }
    }

    render () {
      const props = this.state.data
        ? storageToProps(this.props)(this.state.data)
        : this.props

      return <BaseComponent {...props} />
    }
  }
}
