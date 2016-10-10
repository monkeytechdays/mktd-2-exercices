Templating et Binding avancé avec Angular2
===

Timing: 45 minutes

Objectif
---

Allez plus loin dans le templating et le binding avec Angular2.

A Faire
---

SPOIlER ALERTE: le code contient contient déjà une solution pour l'exercice du routing !

Pour vous guider regardez les `TODO`.

### Composant réutilisable

* Créer le composant `QuizzResultComponent` dans `app/shared/quizz-result/quizz-result.ts`. 
* Pensez à déclarer et exporter ce composant dans le `app/shared/shared.module.ts`
* Utilisez ce composant dans le `app/quizz/result/result.component.html` et `app/leaderboard/leaderboard.component.html`

### Pipe

* Créer un Pipe pour formater la durée dans `app/shared/time/time.pipe.ts`.
* Pensez à déclarer et exporter ce Pipe dans le `app/shared/shared.module.ts`
* Utilisez ce pipe dans le composant `app/shared/quizz-result/quizz-result.html`

### Jouons avec Rx

Il faudrait afficher le nom du joueur quand il démarre le quizz, et pour le stresser au maximum  on ajoute un chrono dans la toolbar  qui affiche chaque secondes. Pour cela nous allons devoir utiliser plus en profondeur les Observables de Rx.

Il faut modifier le service `QuizzService` et le composant `ToolbarComponent`.

voir [Rx operators](http://reactivex.io/documentation/operators.html)

Ressources
---

### Ressources supplémentaires

* [Angular2](https://angular.io/) le site officiel
* [Angular2 CheatSheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
* [Angular2 StyleGuide](https://angular.io/docs/ts/latest/guide/style-guide.html)
* [1.x -> 2](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html) pour ceux qui connaisse AngularJS 1.x
* [API](https://angular.io/docs/ts/latest/api/)
* [TypeScript](https://www.typescriptlang.org/) le site officiel
* [TypeScript Playground](https://www.typescriptlang.org/play/index.html), idéal pour découvrir les principales features du langage avec le code JavaScript associé.

ATTENTION il y a eu beaucoup d'évolutions dans le code d'Angular2, on peut donc facilement tomber sur des ressources obsolètes sur le Web, attention aux tutos, stackoverflow, ...

Pour aller plus loin
---

On devrait pouvoir utiliser [Redux](http://redux.js.org/) avec [ng2-redux](https://github.com/angular-redux/ng2-redux) pour faire cette feature.
