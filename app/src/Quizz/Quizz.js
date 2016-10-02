import React from 'react'
import Question from './Question'

const CurrentStep = ({currentQuestion, quizzId, currentQuestionIndex, onSubmitAnswer, result, answers}) => <div>
  {currentQuestion
    ? <Question
      question={currentQuestion}
      answer={answers[currentQuestionIndex] || null}
      img={`/${quizzId}/${currentQuestionIndex}`}
      onSubmitAnswer={onSubmitAnswer}
    />
    : <p>Soumission du formulaire...</p>}
</div>

export default({loading, ...props}) => <div>
  <h1>Quizz</h1>

  {loading
    ? <p>Démarrage en cours...</p>
    : <CurrentStep {...props} />}
</div>
