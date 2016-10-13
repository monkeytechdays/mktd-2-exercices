import React from 'react'
import Rx from 'rxjs/Rx'

/**
 * Ce composant permet d'executer une requête et de donner son résultat à l'enfant
 * Exemple de librairie qui fait ça pour vous : react-refetch
 *
 * @param propsToRequest    (object: props) -> Promise
 *                          Prend en paramètre les propriétés données au composant
 *                          Renvoie une promesse dont le résultat sera la réponse de la requête
 * @param addResultToProps: (object: props) -> (object: status) -> object
 *                          Prend en paramètre les propriétés données au composant
 *                          Le statut de la requête {mixed: data, bool: loading, bool: refreshing} où data est le résultat de la requête.
 *                          Renvoie les propriétés qu'utilisera le résultat de la requête
 * @param BaseComponent:    React.Component
 *                          Le Composant que vous voulez étendre (celui qui aura le résultat de la requête).
 */

export default ({ propsToRequest, addResultToProps, shouldFetchAgain }) => (BaseComponent) => {
  if (!addResultToProps) {
    addResultToProps = (props) => ({data, loading, refreshing}) => ({
      ...props,
      data,
      loading,
      refreshing
    })
  }

  if (!shouldFetchAgain) {
    shouldFetchAgain = () => true
  }

  return class Fetcher extends React.Component {
    constructor () {
      super()
      this.state = {
        data: null,
        loading: true,
        refreshing: false
      }
    }

    componentWillMount () {
      this.fetchData(this.props)
    }

    componentWillUpdate (nextProps, nextState) {
      if (this.props !== nextProps && shouldFetchAgain(addResultToProps(this.props)(this.state), addResultToProps(nextProps)(nextState))) {
        this.fetchData(nextProps)
      }
    }

    fetchData (props) {
      if (this.currentRequest) {
        this.currentRequest.unsubscribe()
      }

      this.setState((state) => ({
        data: state.data,
        loading: !state.data,
        refreshing: !!state.data
      }))

      /* J'utilise Rx ici parce que cela permet facilement d'avoir de 'cancel' la promesse
       * Dans le cas contraire, le résultat de la promesse aurait potentiellement fait appel
       * au this.setState alors que le composant n'était plus monté.
       * Equivalent juste en promesse :
       * ```
       * propsToRequest(this.props)
       *   .then((data) => this.setState((state) => ({
       *     loading: false,
       *     refreshing: false,
       *     data: data
       *   })))
       * ```
       */
      this.currentRequest = Rx.Observable
        .fromPromise(propsToRequest(props))
        .do((data) => this.setState((state) => ({
          loading: false,
          refreshing: false,
          data: data
        })))
        .subscribe()
    }

    render () {
      return <BaseComponent {...addResultToProps(this.props)(this.state)} />
    }
  }
}
