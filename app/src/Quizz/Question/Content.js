import React from 'react'
import AnswerList from './AnswerList'
import Button from '../../utils/View/Button'
import './Question.css'

class Form extends React.Component {
  constructor (props) {
    super()
    this.state = {
      answer: props.answer || null
    }
    this.onSelectAnswer = this.onSelectAnswer.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillUpdate (props) {
    if (this.props !== props) {
      this.setState({
        answer: props.answer || null
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
      <form onSubmit={this.onSubmit} className='question-form'>
        <AnswerList answers={this.props.answers} selected={this.state.answer} onSelectAnswer={this.onSelectAnswer} />
        <Button disabled={!this.state.answer}>Valider</Button>
      </form>
    )
  }
}

const Content = (props) => (
  <div className="question-content">
    <h2>{props.label}</h2>
    <Form answers={props.answers} answer={props.answer} onSubmit={props.onSubmit} />
  </div>
)

export default Content
