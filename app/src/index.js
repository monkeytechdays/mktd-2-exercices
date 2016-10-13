import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App'
import Launcher from './Launcher'
import Leaderboard from './Leaderboard'
import Quizz from './Quizz'
import 'whatwg-fetch'

/*
 * Cette version de React Router est la v2.
 * Une v3 va sortir mais une v4 est déjà en alpha (Ouaip.)
 *
 * La v4 est radicalement différente et est beaucoup plus dans l'esprit de
 * composants React. L'approche est très intéressante mais peut donner l'impression de
 * faire des spaghettis.
 *
 * Pour avoir quelque chose de plus stable, il faut passer par ceci.
 *
 * ```
 * <Router history={...} routes={{
 *   path: '/',
 *   component: App,
 *   childRoutes: [{
 *     path: '/leaderboard',
 *     component: Leaderboard
 *   }]
 * }}
 * ```
 */
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Launcher} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path='/quizz(/:id)(/:page)' component={Quizz} />
    </Route>
  </Router>,
  document.getElementById('root')
)
