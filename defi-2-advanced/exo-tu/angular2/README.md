Tests Unitaire avec Angular2
===

Timing: 45 minutes

Objectif
---

Tester unitairement Angular2.

A Faire
---

Implémenter les tests unitaires suivant

* `leaderboard.service.spec.ts`: test d'un service avec un backend
* `question.component.spec.ts`: test d'un composant complet

Suivre les exemples suivants: <https://angular.io/resources/live-examples/testing/ts/app-specs.plnkr.html>

Présentation
---

Pour lancer les tests il suffit de faire `npm test` ou `npm run test.watch` pour le mode automatique.

Ressources
---

[Test avec Angular2](https://angular.io/docs/ts/latest/guide/testing.html)
[Jasmine](http://jasmine.github.io/2.5/introduction.html)
[Karma](https://karma-runner.github.io/1.0/index.html)
[Protractor](http://www.protractortest.org/#/)

Voir aussi la documentation d'angular-seed: <https://github.com/mgechev/angular-seed#running-tests>

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

Vous pouvez aussi faire des *page* objects.

Il est bien sur possible de faire des test e2e avec [Protractor](http://www.protractortest.org/#/)

Pour lancer les tests unitaires il faut lancer:
`npm run webdriver-start` pour démarrer un serveur [selenium](http://www.seleniumhq.org/)
`npm run serve.e2e` pour lancer l'application pour les tests
`npm run e2e` pour lancer les tests