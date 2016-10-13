import React from 'react'
import {fetchLeaderboard} from '../utils/Requests/apiRequests'
import Fetcher from '../utils/Requests/Fetcher'
import BarChart from './BarChart'
import Legend from './Legend'
import './Leaderboard.css'

const Board = ({data}) => {
  if (!data || data.length === 0) {
    return <Legend>
      No one is leading yet!
    </Legend>
  }

  const totalScoreByUser = data.reduce((scoreByUser, {userName, score}) => ({
    ...scoreByUser,
    [userName]: {score}
  }), {})

  const totalScoreArray = Object.keys(totalScoreByUser)
    .map((key) => ({
      label: key,
      value: totalScoreByUser[key].score,
      time: totalScoreByUser[key].time
    }))
    .sort(({value: valueA}, {value: valueB}) => valueB - valueA)

  return <div>
    <BarChart data={totalScoreArray} />
    <Legend>Points cumulés</Legend>
  </div>
}

const Leaderboard = (props) => {
  return <div className='leaderboard'>
    <h2>Leaderboard</h2>

    {/* Affiche le score précédent s'il existe */}
    {/* Remplacer les TODOS en vérifiant si oui ou non il existe le `result` dans l'état de l'URL et l'afficher le cas échéant */}
    {TODO && <Legend>
      Bravo ! Vous avez eu {TODO.score} points en {TODO.time} secondes
    </Legend>}

    {props.loading
      ? <p>Chargement du classement...</p>
      : <Board data={props.data} />}
  </div>
}

export default Fetcher({
  propsToRequest: (props) => fetchLeaderboard()
})(Leaderboard)
