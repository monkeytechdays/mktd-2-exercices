import React from 'react'
import {fetchQuestion} from '../utils/Requests/apiRequests'

class QuizzContainer extends React.Component {
  constructor (props) {
    super()
    // Initialiser l'état du composant
    TODO
  }

  // Se brancher au lifecycle du composant pour lancer les requêtes au serveurr
  TODO

  render () {
    // S'il n'a pas encore récupéré le quizz
    if (TODO) {
      return <p>Démarrage en cours...</p>
    } else {
      // Une fois chargé j'affiche la question avec les données récupérées
      return <Question
        question={TODO}
      />
    }
  }
}

return QuizzContainer
