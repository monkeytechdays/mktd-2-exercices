import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App'
import Landing from './Landing'
import Leaderboard from './Leaderboard'
import Quizz from './Quizz'
import 'whatwg-fetch'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path='/quizz' component={Quizz} />
    </Route>
  </Router>,
  document.getElementById('root')
);
