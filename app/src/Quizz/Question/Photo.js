import React from 'react'

export default (props) => (
  <div className="question-photo">
    <img src={props.photo} alt={props.label} />
  </div>
)
