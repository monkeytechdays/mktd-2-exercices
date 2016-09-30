import React from 'react'
import {Link} from 'react-router'

const Landing = (props) => <div>
  <h1>Bienvenue sur MonkeyQuizz</h1>

  <ul>
    <li><Link to='/leaderboard'>Accéder au LeaderBoard</Link></li>
    <li><Link to='/quizz'>Démarrer un Quizz</Link></li>
  </ul>
</div>

export default Landing
