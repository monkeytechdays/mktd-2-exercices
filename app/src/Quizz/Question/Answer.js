import React from 'react'

export default ({answer, selected, onSelect}) => (
  <label key={answer}>
    <input type="radio" name="answer" value={answer} checked={selected} onChange={onSelect} />
    {answer}
  </label>
)
