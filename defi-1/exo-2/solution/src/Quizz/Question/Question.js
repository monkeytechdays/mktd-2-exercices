import React from 'react'
import AnswerList from './AnswerList'

export default function Question (props) {
  return (
    <div className="question">
      <h2>{props.label}</h2>
      <AnswerList answers={props.answers} />
      <button type="submit" disabled>Valider</button>
    </div>
  )
}
