import React from 'react'
import {HOC as FetcherHOC, fetchLeaderboard} from './utils/fetcher'

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

export default FetcherHOC({
  propsToRequest: (props) => fetchLeaderboard()
})(Leaderboard)
