import React from 'react'
import Answer from './Answer'

const AnswerList = (props) => (
  <div className='answers'>
    {props.answers.map((answer, index) => (
      <Answer
        key={index}
        answer={answer}
      />
    ))}
  </div>
)

AnswerList.propTypes = {
  answers: React.PropTypes.array.isRequired
}

export default AnswerList
