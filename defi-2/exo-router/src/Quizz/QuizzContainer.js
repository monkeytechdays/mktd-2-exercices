/* global localStorage */
import React from 'react'
import {withRouter} from 'react-router'
import {routerShape} from 'react-router/lib/PropTypes'
import {fetchQuizz, submitQuizz} from '../utils/Requests/apiRequests'
import MemoizedFetcher from '../utils/Requests/MemoizedFetcher'
import ServiceSubscriber from '../utils/Services/ServiceSubscriber'
import StoreData from '../utils/Storage/StoreData'
import GetStoredData from '../utils/Storage/GetStoredData'
import QuizzNavigator from './QuizzNavigator'

const RESPONSE_STORAGE_KEY = 'answers'
const QUIZZ_STORAGE_KEY = 'quizz'

/**
 * Le Container est généralement celui qui va contenir la logique métier de l'application
 * C'est donc lui qui sait comment (1) récupérer un formulaire, (2) l'afficher,
 * (3) enregistrer des réponses, (4) soumettre un quizz
 *
 * Pourquoi en faire un HOC ? Parce que j'ai besoin de stocker les réponses dans le
 * localStorage à chaque fois qu'elles sont mises à jour et que j'ai déjà un composant
 * qui sait faire ça.
 * J'aurais aussi pu le mettre dans le fichier QuizzNavigator, mais cela aurait été une
 * mauvaise répartition des responsabilités.
 */
const QuizzContainer = (BaseComponent) => {
  class QuizzContainer extends React.Component {
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
    }

    componentWillReceiveProps (nextProps) {
      // Dans la condition il faut vérifier qu'il n'y a pas déjà un QUIZZ_ID dans l'URL
      if (nextProps.quizz && TODO) {
        // On a fini de charger le quizz, donc on va sur l'URL /quizz/QUIZZ_ID
        TODO
        this.setState((state) => ({
          ...state,
          answers: []
        }))
      }
    }

    submitAnswer (index, answer) {
      this.setState((state) => {
        // Sauvegarde de la réponse
        const answers = [...state.answers]
        answers[index] = answer

        return { ...state, answers: answers }
      })
    }

    submitResult () {
      // On affiche le fait qu'on soumet le formulaire en mettant à jour le résultat
      // dans l'état du composant
      this.setState((state) => ({
        result: { answers: state.answers }
      }), () => {
        // On soumet le résultat une fois que le state a été mis à jour avec le résultat.
        submitQuizz(this.props.quizz.id, this.state.answers)
          .then((result) => {
            // On a fini le quizz, donc on redirige vers le /leaderboard.
            // Cependant, afin de donner une information supplémentaire au leaderboard,
            // on ajoute un `state` dans l'URL de la forme {result: result}
            TODO
            localStorage.removeItem(RESPONSE_STORAGE_KEY)
            localStorage.removeItem(QUIZZ_STORAGE_KEY)
          })
      })
    }

    render () {
      if (this.props.loading) {
        return <p>Démarrage en cours...</p>
      } else {
        // On récupère le numéro de la question à afficher depuis l'URL
        // /!\ Il faut le convertir en entier.
        const page = TODO
        return <BaseComponent
          quizz={this.props.quizz}
          page={page}
          onSubmitAnswer={this.submitAnswer}
          onSubmitResult={this.submitResult}
          result={this.state.result}
          answers={this.state.answers}
        />
      }
    }
  }

  QuizzContainer.propTypes = {
    answers: React.PropTypes.array,
    quizz: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }),
    loading: React.PropTypes.bool.isRequired,
    router: routerShape,
    userService: React.PropTypes.shape({
      data: React.PropTypes.string
    })
  }

  return QuizzContainer
}

/*
 * Pourquoi ici c'est compliqué ? Parce qu'on s'embête à gérer des cas compliqués
 * 1/ On veut que si l'utilisateur rafraichit (f5) sa page, il récupère tout de même son quizz en cours
 * 2/ On veut que si l'utilisateur rafraichit (f5) sa page, il récupère ses questions
 */
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
        shouldFetchAgain: (props) => !props.quizz,
        storageKey: QUIZZ_STORAGE_KEY,
        propsToStorage: (props) => props.quizz,
        // On ne veut récupérer le quizz du localStorage que s'il a le même id que celui dans l'URL
        // Il faut donc que quizz.id soit le même que l'id de l'URL
        checkResult: (props) => (quizz) => TODO
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

/*
 * En version simplifié (je récupère juste les infos dont j'ai besoin et je m'en moque
 * des refreshs), cela donnerait ceci :
 *
 * export default (
 *   ServiceSubscriber({name: 'userService'})(
 *     withRouter(
 *       Fetcher({
 *         propsToRequest: (props) => fetchQuizz(props.userService.data),
 *         addResultToProps: (props) => ({data, loading}) => ({
 *           ...props,
 *           loading: loading,
 *           quizz: data
 *         })
 *       })(QuizzContainer)
 *     )
 *   )
 * )
 *
 * En considérant que QuizzContainer n'a donc plus besoin d'être un HOC puisqu'il n'y
 * a pas de GetStoredData/StoreData
 */
