import React from 'react'

export default function Header (props) {
  return (
    <header className="header">
      <div className="brand"><h1>Quizz Monkeys</h1></div>
      <div className="user">{props.user.firstname} {props.user.lastname}</div>
    </header>
  )
}
