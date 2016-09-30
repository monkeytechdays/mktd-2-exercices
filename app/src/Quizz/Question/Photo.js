import React from 'react'

export default (props) => (
  <div className="photo">
    <img src={props.photo} alt={props.label} />
  </div>
)
