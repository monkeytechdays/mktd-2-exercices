Routing avec React
===

Timing: 45 minutes

Objectif
---

Découvrir le router le plus populaire de la communauté react : react-router

A Faire
---

Le router permet trois choses :

1- Déclarer le mapping entre url et composant
2- Récupérer des paramètres depuis l'url
3- Changer l'url de l'application

Toutes les parties relatives à cela ont été supprimées dans l'application et
remplacées par des TODOS. A vous de refaire marcher l'application :)

Présentation
---

Les pages de l'application sont :

1- la landing page qui contient le Launcher (url : /)
2- le leaderboard qui contient les scores (url : /leaderboard)
3- Le démarrage du quizz (url : '/quizz')
4- Le démarrage des questions (url : '/quizz/QUIZZ_ID')
5- L'affichage d'une question (url : '/quizz/QUIZZ_ID/NUMERO_QUESTION')

---

* [React Router](https://github.com/ReactTraining/react-router) Lien vers le repo avec toutes les informations nécessaires

Pour aller plus loin
---
La même chose mais avec React Router v4. Attention par contre, l'appli n'est pas du tout pensée pour faire ça.
Vous pouvez plus simplement essayer une ébauche en reproduisant les URLs suivantes :

/ affiche un lien vers /quizz
/quizz affiche un lien vers la première question
/quizz/0 affiche un lien vers la deuxième question
/quizz/1 idem vers la 3eme
/quizz/2 ...
/quizz/n (avec n configurable)
/quizz/n+1 => redirection vers /leaderboard
/quizz/n+2 => redirection vers /leaderboard  
