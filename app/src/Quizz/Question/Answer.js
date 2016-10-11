import React from 'react'

const Answer = ({answer, selected, onSelect}) => (
  <label key={answer}>
    <input type='radio' name='answer' value={answer} checked={selected} onChange={onSelect} />
    {answer}
  </label>
)

Answer.propTypes = {
  answer: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

export default Answer
