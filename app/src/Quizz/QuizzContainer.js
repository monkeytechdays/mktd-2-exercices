import React from 'react'
import {withRouter} from 'react-router'
import {fetchQuizz, submitQuizz} from '../utils/Requests/apiRequests'
import MemoizedFetcher from '../utils/Requests/MemoizedFetcher'
import ServiceSubscriber from '../utils/Services/ServiceSubscriber'
import StoreData from '../utils/Storage/StoreData'
import GetStoredData from '../utils/Storage/GetStoredData'
import Quizz from './Quizz'

const RESPONSE_STORAGE_KEY = 'answers'
const QUIZZ_STORAGE_KEY = 'quizz'

const QuizzContainer = (BaseComponent) => class extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentQuestion: null,
      currentQuestionIndex: null,
      answers: props.answers || [],
      start: null,
      result: null
    }
    this.goToQuestion = this.goToQuestion.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.submitResult = this.submitResult.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // Une grande partie de la performance que propose React vient du fait qu'il
    // est possible de déterminer si oui ou non l'affichage du composant va changer
    // Ainsi, shouldComponentUpdate permet de définir s'il est nécessaire de relancer
    // un rendu
    return this.state.currentQuestion !== nextState.currentQuestion
  }

  componentWillMount () {
    this.updateCurrentQuestion(this.props)
  }

  componentWillReceiveProps (props) {
    this.updateCurrentQuestion(props)
  }

  updateCurrentQuestion (props) {
    // Définition de la question à afficher en question des propriété données au composant
    // Cela est possible grâce au fait que la page est définie par l'URL => Cela change donc
    // props.params.page à chaque mise à jour (cf. src/index.js pour la définition des params
    // d'URL)
    if (props.quizz) {
      if (!props.params.page) {
        this.setQuestionState(props, 0)
      } else if (this.state.currentQuestionIndex !== parseInt(props.params.page, 0)) {
         // L'url a changé et ne correspond pas à la question déjà affichée
         // -> Aller sur la bonne question
         const page = parseInt(props.params.page, 0)
         this.setQuestionState(props, page)
      }
    }
  }

  setQuestionState (props, page) {
    // Mise à jour du state avec la bonne page
    this.setState((state) => ({
      ...state,
      currentQuestion: props.quizz.questions[page],
      currentQuestionIndex: page,
      start: state.start || new Date()
    }), () => {
      // Si l'URL n'est pas au bon endroit (exemple ligne 51), on la met à jour avec
      // la bonne page
      this.goToQuestion(props, page)
    })
  }

  goToQuestion (props, index) {
    if (props.quizz.questions[index]) {
      // Si la question existe
      if (index !== parseInt(props.params.page, 0)) {
        // Et que l'URL n'est pas à jour
        props.router.push(`/quizz/${props.quizz.id}/${index}`)
      }
    } else {
      // Sinon, cela veut dire qu'on est allé trop loin => qu'il n'y a plus de réponse
      // On soumet donc le résultat final
      this.submitResult(props)
    }
  }

  submitAnswer (answer) {
    this.setState(
      (state) => {
        // Sauvegarde de la réponse
        const answers = [...state.answers]
        answers[state.currentQuestionIndex] = answer

        return { ...state, answers: answers }
      },
      () => {
        // Une fois que c'est enregistré, on affiche la prochaine question
        this.goToQuestion(this.props, this.state.currentQuestionIndex + 1)
      }
    )
  }

  submitResult (props) {
    // On affiche le fait qu'on soumet le formulaire en mettant à jour le résultat
    // dans l'état du composant
    this.setState((state) => ({
      ...state,
      currentQuestion: null,
      currentQuestionIndex: null,
      result: { answers: state.answers }
    }), () => {
      // On soumet le résultat
      submitQuizz(props.userService.data, this.state.answers)
        .then(() => {
          props.router.push('/leaderboard')
          localStorage.removeItem(RESPONSE_STORAGE_KEY)
          localStorage.removeItem(QUIZZ_STORAGE_KEY)
        })
    })
  }

  render () {
    return <BaseComponent
      loading={this.props.loading}
      quizzId={this.props.quizz ? this.props.quizz.id : null}
      currentQuestion={this.state.currentQuestion}
      currentQuestionIndex={this.state.currentQuestionIndex}
      onSubmitAnswer={this.submitAnswer}
      result={this.state.result}
      answers={this.state.answers}
    />
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
            })(Quizz)
          )
        )
      )
    )
  )
)
