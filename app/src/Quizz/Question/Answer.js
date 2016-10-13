import React from 'react'

const Answer = (props) => (
  <label key={props.answer}>
    <input
      type='radio'
      name='answer'
      value={props.answer}
      checked={props.selected}
      onChange={props.onSelect}
    />
    {props.answer}
  </label>
)

Answer.propTypes = {
  answer: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

export default Answer
