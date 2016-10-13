import React from 'react'

const Answer = (props) => (
  <label key={props.answer}>
    <input
      type='radio'
      name='answer'
      value={props.answer}
    />
    {props.answer}
  </label>
)

Answer.propTypes = {
  answer: React.PropTypes.string.isRequired
}

export default Answer
