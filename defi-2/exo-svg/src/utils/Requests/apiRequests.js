/* global fetch */
const API_BASE_URL = '/api'

/*
 * Ici on recense l'ensemble des requêtes qui peuvent être utiles à l'application
 * Nous utilisons l'API fetch qui est très pratique pour faire des requêtes HTTP
 * https://github.com/github/fetch
 */

export const fetchLeaderboard = () => {
  return fetch(`${API_BASE_URL}/leaderboard`)
    .then((response) => response.json())
}

export const fetchQuizz = (username) => {
  return fetch(`${API_BASE_URL}/quizz?userName=${username}`)
    .then((response) => response.json())
}

export const fetchQuestion = (quizzId, index) => {
  return fetch(`${API_BASE_URL}/quizz/${quizzId}/${index}`)
    .then((response) => response.json())
}

export const submitQuizz = (quizzId, responses) => {
  return fetch(`${API_BASE_URL}/quizz/${quizzId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({responses})
  })
    .then((response) => response.json())
}
