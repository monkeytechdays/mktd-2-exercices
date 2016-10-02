import React from 'react'
import {fetchLeaderboard} from './utils/Requests/apiRequests'
import Fetcher from './utils/Requests/Fetcher'

const Board = ({data}) => <ul>
  {data.map((line, index) => <li key={index}>
    {line.username} - {line.score} - {line.duration}
  </li>)}
</ul>

const Leaderboard = ({loading, data}) => <div>
  <h1>Leaderboard</h1>
  {loading
    ? <p>Chargement en cours...</p>
    : <Board data={data} />}
</div>

export default Fetcher({
  propsToRequest: (props) => fetchLeaderboard()
})(Leaderboard)
