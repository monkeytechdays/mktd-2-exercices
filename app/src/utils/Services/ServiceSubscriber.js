import React from 'react'

/**
 * Cette architecture de service n'est pas très appréciée par la communauté React
 * Penchez vous plutôt sur du Redux si vous avez besoin d'architecturer vos données.
 * Cependant, la plupart du temps, les gens considèrent que Redux est obligatoire
 * pour pouvoir faire une application complète en React. C'est faux.
 *
 * La plupart du temps, vous n'aurez besoin que d'un petit service ou d'utiliser
 * La notion de contexte dans React.
 *
 * Cet HOC expose donc un Service dans le contexte d'un composant. C'est l'utilisation
 * Primaire que l'on peut avoir d'un HOC : Dependency Injection
 * Evitez autant se faire se peut de passer un état dans votre contexte. Sinon,
 * vous risquez d'avoir des conflits avec des shouldComponentUpdate un peu trop violents
 *
 * @param name    string
 *                Le nom du service que vous souhaitez récupérer
 */
export default({name}) => (BaseComponent) => {
  class Subscriber extends React.Component {
    constructor () {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount () {
      /* Je m'enregistre dans mon service pour pouvoir écouter les nouvelles données */
      this.context[name].subscribe(this)
      this.setState({
        data: this.context[name].getData()
      })
    }

    componentWillUnmount () {
      /* Si j'ai fini d'exister, je dis à mon service qu'il n'y a plus besoin de me
      prévenir des changements */
      this.context[name].unsubscribe(this)
    }

    notify () {
      /* Fonction qui est appelée directement par le service quand il se met à jour */
      this.setState({
        data: this.context[name].getData()
      })
    }

    render () {
      const props = {
        ...this.props,
        [name]: {
          service: this.context[name],
          data: this.state.data
        }
      }

      return <BaseComponent {...props} />
    }
  }

  Subscriber.contextTypes = {
    [name]: React.PropTypes.shape({
      getData: React.PropTypes.func.isRequired,
      subscribe: React.PropTypes.func.isRequired,
      unsubscribe: React.PropTypes.func.isRequired
    })
  }

  return Subscriber
}
