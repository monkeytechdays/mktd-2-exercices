import React from 'react'
import {fetchLeaderboard} from '../utils/Requests/apiRequests'
import Fetcher from '../utils/Requests/Fetcher'
import BarChart from './BarChart'
import Legend from './Legend'
import './Leaderboard.css'

const Board = ({data}) => {
  const totalScoreByUser = data.reduce((scoreByUser, {username, score}) => ({
    ...scoreByUser,
    [username]: score + (scoreByUser[username] || 0)
  }), {})

  const totalScoreArray = Object.keys(totalScoreByUser)
    .map((key) => ({
      label: key,
      value: totalScoreByUser[key]
    }))
    .sort(({value: valueA}, {value: valueB}) => valueB - valueA)

  return <div>
    <BarChart data={totalScoreArray} />
    <Legend>Points cumulés</Legend>
  </div>
}

const Leaderboard = ({loading, data}) => {
  return <div className='leaderboard'>
    <h2>Leaderboard</h2>
    {loading
      ? <p>Chargement en cours...</p>
    : <Board data={data} />}
  </div>
}

export default Fetcher({
  propsToRequest: (props) => fetchLeaderboard()
})(Leaderboard)
