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
 * @param service object
 *                Le service que vous voulez donner. Celui-ci doit répondre aux critères
 *                définis par le childContextTypes
 * @param name    string
 *                Le nom du contexte. Celui-ci doit être unique si vous vous voulez
 *                ajouter plusieurs services.
 */
export default ({service, name}) => (BaseComponent) => {
  class serviceContainer extends React.Component {
    getChildContext () {
      return {
        [name]: service
      }
    }

    render () {
      return <BaseComponent {...this.props} />
    }
  }

  serviceContainer.childContextTypes = {
    [name]: React.PropTypes.shape({
      getData: React.PropTypes.func.isRequired,
      subscribe: React.PropTypes.func.isRequired,
      unsubscribe: React.PropTypes.func.isRequired
    })
  }

  return serviceContainer
}
