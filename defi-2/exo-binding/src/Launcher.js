import React from 'react'
import {withRouter} from 'react-router'
import {routerShape} from 'react-router/lib/PropTypes'
import Button from './utils/View/Button'
import './Launcher.css'

/*
 * Le launcher est la page d'accueil du site
 * Il permet uniquement de lancer un quizz
 */
class Launcher extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    // Dire au service qu'on a un nouveau nom d'utilisateur
    TODO
    this.props.router.push('/quizz')
  }

  onChange (name) {
    return (event) => {
      this.setState({
        username: event.target.value
      })
    }
  }

  render () {
    return (
      <div className='launcher'>
        <div>
          <h2>Bienvenue sur Monkey Quizz</h2>

          <form onSubmit={this.onSubmit}>
            <label htmlFor='username'>Pseudo</label>
            <input name='username' id='username' value={this.state.username} onChange={this.onChange('username')} />
            <Button>C'est parti monkey quizz !</Button>
          </form>
        </div>
      </div>
    )
  }
}

Launcher.propTypes = {
  userService: React.PropTypes.shape({
    data: React.PropTypes.string,
    service: React.PropTypes.shape({
      setUser: React.PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  router: routerShape
}

// S'enregistrer au service pour pouvoir mettre à jour le user dans le onSubmit
TODO
export default withRouter(
  Launcher
)
