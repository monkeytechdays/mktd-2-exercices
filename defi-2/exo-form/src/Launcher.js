import React from 'react'
import {withRouter} from 'react-router'
import {routerShape} from 'react-router/lib/PropTypes'
import ServiceSubscriber from './utils/Services/ServiceSubscriber'
import Button from './utils/View/Button'
import './Launcher.css'

/*
 * Le launcher est la page d'accueil du site
 * Il permet uniquement de lancer un quizz
 */
class Launcher extends React.Component {
  constructor () {
    super()
    // Préparer le state
    TODO
  }

  onSubmit (event) {
    // Envoyer les données stockées à ce qui va stocker pour de bon le nom de l'utilisateur
    TODO
  }

  render () {
    return (
      <div className='launcher'>
        <div>
          <h2>Bienvenue sur Monkey Quizz</h2>

          <form onSubmit={this.onSubmit}>
            <label htmlFor='username'>Pseudo</label>
            {/* Compléter les propriétés de l'input pour qu'il fasse quelque chose */}
            <input TODO />
            <Button>C'est parti monkey quizz !</Button>
          </form>
        </div>
      </div>
    )
  }
}

Launcher.propTypes = {
  router: routerShape
}

export default ServiceSubscriber({name: 'userService'})(
  withRouter(
    Launcher
  )
)
