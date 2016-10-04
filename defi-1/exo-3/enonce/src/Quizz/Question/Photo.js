import React from 'react'

export default function Photo (props) {
  return (
    <div className="photo">
      <img src={props.photo} alt={props.label} />
    </div>
  )
}
