import React from 'react'
import {withRouter} from 'react-router'
import {routerShape} from 'react-router/lib/PropTypes'
import ServiceSubscriber from './utils/Services/ServiceSubscriber'
import Button from './utils/View/Button'
import './Launcher.css'

class Launcher extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount () {
    this.setState({
      username: this.props.userService.data || ''
    })
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.userService.service.setUser(this.state.username)
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
            <Button>Démarrer un quizz</Button>
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

export default ServiceSubscriber({name: 'userService'})(
  withRouter(
    Launcher
  )
)
