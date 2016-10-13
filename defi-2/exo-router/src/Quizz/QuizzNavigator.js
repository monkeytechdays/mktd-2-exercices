import React from 'react'
import {withRouter} from 'react-router'
import Question from './Question'

/*
 * Le but du QuizzNavigator est uniquement de gérer la position de la question affichée
 * Celui-ci utilise l'URL pour choisir la question à afficher. cf. goToQuestion
 * Cela dit, il pourrait tout à fait stocker plus naivement l'index dans son state
 * et s'en contenter
 * Il n'y aurait donc pas besoin de s'embêter avec les méthodes de lifecycle. On n'aurait
 * que : constructor, goToQuestion, submitAnswer et render
 */
class QuizzNavigator extends React.Component {
  constructor (props) {
    super()
    this.goToQuestion = this.goToQuestion.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    /*
     * Une grande partie de la performance que propose React vient du fait qu'il
     * est possible de déterminer si oui ou non l'affichage du composant va changer
     * Ainsi, shouldComponentUpdate permet de définir s'il est nécessaire de relancer
     * un rendu
     */
    return this.props.page !== nextProps.page ||
      this.props.answers[this.props.page] !== nextProps.answers[nextProps.page]
  }

  componentWillMount () {
    this.updateCurrentQuestion(this.props)
  }

  componentWillReceiveProps (props) {
    this.updateCurrentQuestion(props)
  }

  updateCurrentQuestion (props) {
    if (!props.page) {
      this.goToQuestion(props, 0)
    }
  }

  goToQuestion (props, index) {
    if (props.quizz.questions[index]) {
      // Si la question existe
      if (index !== props.page) {
        // Et que l'URL n'est pas à jour
        // Alors, on va sur l'URL `/quizz/${props.quizz.id}/${index}`
        TODO
      }
    } else {
      // Sinon, cela veut dire qu'on est allé trop loin => qu'il n'y a plus de réponse
      // On soumet donc le résultat final
      this.props.onSubmitResult()
    }
  }

  submitAnswer (answer) {
    this.props.onSubmitAnswer(this.props.page, answer)
    this.goToQuestion(this.props, this.props.page + 1)
  }

  render () {
    const page = this.props.page
    if (page >= 0 && this.props.quizz.questions[page]) {
      const currentQuestion = this.props.quizz.questions[page]

      return <Question
        quizz={this.props.quizz}
        index={page}
        question={currentQuestion}
        answer={this.props.answers[page] || null}
        img={`/api/quizz/${this.props.quizz.id}/${page}`}
        onSubmitAnswer={this.submitAnswer}
      />
    } else {
      return <p>Soumission du formulaire...</p>
    }
  }
}

QuizzNavigator.propTypes = {
  page: React.PropTypes.number.isRequired,
  quizz: React.PropTypes.shape({
    questions: React.PropTypes.array.isRequired,
    id: React.PropTypes.string.isRequired
  }).isRequired,
  answers: React.PropTypes.array.isRequired,
  onSubmitAnswer: React.PropTypes.func.isRequired,
  onSubmitResult: React.PropTypes.func.isRequired
}

export default withRouter(QuizzNavigator)
