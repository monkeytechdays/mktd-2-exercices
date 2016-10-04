import React from 'react'

export default function AnswerList (props) {
  return (
    <div className="answers">
      {props.answers.map((answer) => (
        <label key={anwser.value}><input type="radio" name="answer" value={answer.value} />{answer.label}</label>
      ))}
    </div>
  )
}
