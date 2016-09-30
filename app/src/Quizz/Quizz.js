import React from 'react'
import {fetchQuizz, HOC as FetcherHOC} from '../utils/fetcher'
import Question from './Question'
import Result from './Result'

const CurrentStep = ({currentQuestion, quizzId, currentQuestionIndex, onNext, result}) => <div>
  {currentQuestion
    ? <Question
      question={currentQuestion}
      img={`/${quizzId}/${currentQuestionIndex}`}
      onNext={onNext}
    />
    : <Result result={result} />}
</div>

const Quizz = ({loading, ...props}) => <div>
  <h1>Quizz</h1>

  {loading
    ? <p>Démarrage en cours...</p>
    : <CurrentStep {...props} />}
</div>

class SmartQuizz extends React.Component {
  constructor () {
    super()
    this.state = {
      currentQuestion: null,
      currentQuestionIndex: null,
      responses: [],
      start: null,
      result: null
    }
    this.goToQuestion = this.goToQuestion.bind(this)
    this.goToNextQuestion = this.goToNextQuestion.bind(this)
  }

  componentWillUpdate (props) {
    if (!this.state.currentQuestion && props.quizz) {
      console.log(props.quizz)
      this.goToQuestion(props, 0)
    }
  }

  goToQuestion (props, index) {
    if (props.quizz.questions[index]) {
      this.setState((state) => ({
        ...state,
        currentQuestion: props.quizz.questions[index],
        currentQuestionIndex: index,
        start: state.start || new Date()
      }))
    } else {
      this.setState((state) => ({
        ...state,
        currentQuestion: null,
        currentQuestionIndex: null,
        result: {
          responses: state.responses,
          time: (new Date()) - state.start
        }
      }))

      // TODO redirect to leader board once POST done
    }
  }

  goToNextQuestion (response) {
    this.setState((state) => ({
      ...state,
      responses: [...state.responses, response]
    }))
    this.goToQuestion(this.props, this.state.currentQuestionIndex + 1)
  }


  render () {
    return <Quizz
      loading={this.props.loading}
      quizzId={this.props.quizz ? this.props.quizz.id : null}
      currentQuestion={this.state.currentQuestion}
      currentQuestionIndex={this.state.currentQuestionIndex}
      onNext={this.goToNextQuestion}
      result={this.state.result}
    />
  }
}

export default FetcherHOC({
  propsToRequest: (props) => fetchQuizz('Julien'),
  addResultToProps: ({data, loading}, props) => ({
    ...props,
    loading: loading,
    quizz: data
  })
})(SmartQuizz)
