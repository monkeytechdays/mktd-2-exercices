import React from 'react'
import {withRouter} from 'react-router'
import {fetchQuizz, submitQuizz} from '../utils/Requests/apiRequests'
import MemoizedFetcher from '../utils/Requests/MemoizedFetcher'
import ServiceSubscriber from '../utils/Services/ServiceSubscriber'
import StoreData from '../utils/Storage/StoreData'
import GetStoredData from '../utils/Storage/GetStoredData'
import QuizzNavigator from './QuizzNavigator'

const RESPONSE_STORAGE_KEY = 'answers'
const QUIZZ_STORAGE_KEY = 'quizz'

const QuizzContainer = (BaseComponent) => class extends React.Component {
  constructor (props) {
    super()
    this.state = {
      answers: props.answers || [],
      result: null
    }
    this.submitAnswer = this.submitAnswer.bind(this)
    this.submitResult = this.submitResult.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return ((this.props.quizz && this.props.quizz.id) !== (nextProps.quizz && nextProps.quizz.id))
      || this.props.params.page !== nextProps.params.page
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.quizz && nextProps.params.id !== nextProps.quizz.id) {
      nextProps.router.push(`/quizz/${nextProps.quizz.id}`)
      this.setState((state) => ({
        ...state,
        answers: []
      }))
    }
  }

  submitAnswer (index, answer) {
    this.setState(
      (state) => {
        // Sauvegarde de la réponse
        const answers = [...state.answers]
        answers[index] = answer

        return { ...state, answers: answers }
      }
    )
  }

  submitResult () {
    // On affiche le fait qu'on soumet le formulaire en mettant à jour le résultat
    // dans l'état du composant
    this.setState((state) => ({
      result: { answers: state.answers }
    }), () => {
      // On soumet le résultat
      submitQuizz(this.props.userService.data, this.state.answers)
        .then((result) => {
          this.props.router.push({
            pathname: '/leaderboard',
            state: { result: result }
          })
          localStorage.removeItem(RESPONSE_STORAGE_KEY)
          localStorage.removeItem(QUIZZ_STORAGE_KEY)
        })
    })
  }

  render () {
    if (this.props.loading) {
      return <p>Démarrage en cours...</p>
    } else {
      return <BaseComponent
        quizz={this.props.quizz}
        page={parseInt(this.props.params.page, 0)}
        onSubmitAnswer={this.submitAnswer}
        onSubmitResult={this.submitResult}
        result={this.state.result}
        answers={this.state.answers}
      />
    }
  }
}

export default (
  ServiceSubscriber({name: 'userService'})(
    withRouter(
      MemoizedFetcher({
        propsToRequest: (props) => fetchQuizz(props.userService.data),
        addResultToProps: (props) => ({data, loading}) => ({
          ...props,
          loading: loading,
          quizz: data
        }),
        storageKey: QUIZZ_STORAGE_KEY,
        propsToStorage: (props) => props.quizz,
        checkResult: (props) => (data) => data.id === props.params.id
      })(
        GetStoredData({
          storageKey: RESPONSE_STORAGE_KEY,
          storageToProps: (props) => (data) => ({...props, answers: data || []})
        })(
          QuizzContainer(
            StoreData({
              storageKey: RESPONSE_STORAGE_KEY,
              propsToStorage: (props) => props.answers
            })(QuizzNavigator)
          )
        )
      )
    )
  )
)
