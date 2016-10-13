import React from 'react'
import ReactDOM from 'react-dom'
import TODO from 'react-router'
import 'whatwg-fetch'

/*
 * Remplacer le TODO par la déclaration des routes de l'application
 * Il vous faudra aussi importer les bonnes pages
 *
 * Si vous êtes perdus et que vous souhaitez uniquement comprendre le
 * fonctionnement du router vous pouvez aussi vous contenter de faire
 * une page d'index qui contient des liens vers /test/id1, /test/id2, /test/id3
 * et une page de test qui affiche l'id présent dans l'URL.
 */
ReactDOM.render(
  TODO,
  document.getElementById('root')
)
