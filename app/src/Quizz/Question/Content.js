import React from 'react'
import AnswerList from './AnswerList'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      answer: null
    }
    this.onSelectAnswer = this.onSelectAnswer.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillUpdate (props) {
    if (this.props !== props) {
      this.setState({
        answer: null
      })
    }
  }

  onSelectAnswer (answer) {
    this.setState({
      answer
    })
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.answer)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <AnswerList answers={this.props.answers} selected={this.state.answer} onSelectAnswer={this.onSelectAnswer} />
        <button type="submit" disabled={!this.state.answer}>Valider</button>
      </form>
    )
  }
}

const Content = (props) => (
  <div className="question">
    <h2>{props.label}</h2>
    <Form answers={props.answers} onSubmit={props.onNext} />
  </div>
)

export default Content
