import React from 'react'
import Answer from './Answer'

const AnswerList = (props) => (
  <div className='answers'>
    {props.answers.map((answer, index) => (
      <Answer
        key={index}
        answer={answer}
        selected={answer === props.selected}
        onSelect={() => props.onSelectAnswer(answer)}
      />
    ))}
  </div>
)

AnswerList.propTypes = {
  answers: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string,
  onSelectAnswer: React.PropTypes.func.isRequired
}

export default AnswerList
