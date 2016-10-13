Routing avec React
===

Timing: 45 minutes

Objectif
---

Découvrir le framework de test de prédilection pour React : Jest  
(Le but n'est pas de faire des tests en JS mais bel et bien en React)

A Faire
---

Tester un composant 'normal' : Leaderboard.js est un bon exemple

- Vérifier que lorsqu'on utilise 'onChange', la valeur dans l'input est correctement impactée

---

* [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) Lien vers les tests en Jest
* Pour avoir un environnement de test tout prêt, regarder les instructions du côté de https://github.com/facebookincubator/create-react-app

Pour aller plus loin
---

Tester un HOC (le cas des services)

1- Vérifier que pour le ServiceContainer, un context est bien mis à disposition des enfants
avec le bon service mis à disposition
2- Vérifier que lorsqu'on fait une mise à jour dans un service, le ServiceSubscriber est
correctement mis à jour
