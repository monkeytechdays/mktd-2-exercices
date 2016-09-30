import React from 'react'
import {Link} from 'react-router'

export default function Header (props) {
  return (
    <header className="header">
      <div className="brand"><Link to='/'><h1>Quizz Monkeys</h1></Link></div>
      <div className="user">{props.user}</div>
    </header>
  )
}
