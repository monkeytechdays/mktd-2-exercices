import React from 'react'
import {withRouter} from 'react-router'
import ServiceSubscriber from './utils/Services/ServiceSubscriber'

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
      <div>
        <h1>Bienvenue sur MonkeyQuizz</h1>

        <form onSubmit={this.onSubmit}>
          <label></label>
          <input name='username' value={this.state.username} onChange={this.onChange('username')}/>
        </form>
      </div>
    )
  }
}

export default ServiceSubscriber({name: 'userService'})(
  withRouter(
    Launcher
  )
)
