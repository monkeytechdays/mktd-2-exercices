import React from 'react'
import Answer from './Answer'

export default (props) => (
  <div className="answers">
    {props.answers.map((answer) => (
      <Answer key={answer} answer={answer} selected={answer === props.selected} onSelect={() => props.onSelectAnswer(answer)} />
    ))}
  </div>
)
