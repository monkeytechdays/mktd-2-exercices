import React from 'react'
import Question from './Question'
import 'whatwg-fetch'

export default class Quizz extends React.Component {
  constructor () {
    super()
    this.state = {
      question: null
    }
    this.fetchQuestion = this.fetchQuestion.bind(this)
  }

  componentWillMount () {
    this.fetchQuestion('aze123')
  }

  fetchQuestion (id) {
    fetch(`/data/quizz/${id}.json`)
      .then((response) => response.json())
      .then(this.transformQuestion)
      .then((question) => this.setState((state) => ({question})))
  }

  transformQuestion (question) {
    return {
      label: 'Quel est le nom de ce singe ?',
      photo: question.img,
      answers: question.values.map((answer) => ({
        value: answer,
        label: answer[0].toLocaleUpperCase() + answer.substring(1)
      }))
    }
  }

  render () {
    return (
      this.state.question
        ? <Question question={this.state.question} />
        : <div>Chargement en cours...</div>
    )
  }
}
