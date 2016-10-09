AJAX avec Angular2
===

Timing: maxi 30 minutes

Objectif
---

Utiliser AJAX avec Angular2.

A Faire
---

Il faut modifier le fichier `app/shared/quizz/quizz.service.ts` pour rendre le service injectable et implémenter les appels HTTP.
Ce service est utilisé par le composant `app/quizz/question/question.component.ts`.

Vous pouvez aussi regarder le fichier `app/app.module.ts` définissant le module principale de l'application, contenant la dépendance sur le module `HttpModule` qui contient le service `Http`. Le module principale contient aussi l'injection du service `Storage` utiliser dans le `QuizzService`.

Pour démarrer l'application il faut récupérer les dépendances avec `npm install`.

Pour lancer en mode développement il suffit de lancer `npm start`.

> Cette application a été initialisée à partir d'[angular-seed](https://mgechev.github.io/angular-seed/). Vous pouvez ultérieurement regarder plus en détail la documentation et le wiki de ce projet.

Présentation
---

Le service Http est un service Angular2 qui permet de faire facilement des requêtes HTTP (AJAX). Ces appels sont asynchrones, cette API utilise les [Observable](https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs)s de [RxJS](https://github.com/ReactiveX/RxJS).

Voir la documentation

* [HTTP Client](https://angular.io/docs/ts/latest/guide/server-communication.html)
* [Service Http](https://angular.io/docs/ts/latest/api/http/index/Http-class.html)

### Injection de service

Lorsqu'on crée un service, il faut ajouter le décorateur `@Injectable()`, et le déclarer dans les `providers` de son module.
On peut modifier l'injection d'un service, par exemple en fournissant une valeur, une classe, une factory, ...

> Attention, n'oubliez pas les parenthèses à `@Injectable()`.

Voir <https://angular.io/docs/ts/latest/guide/dependency-injection.html>

Resources
---

* [Injection de dépendances](https://angular.io/docs/ts/latest/guide/dependency-injection.html)
* [Tuto Http](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html)
* [Documentation ReactiveX](http://reactivex.io/documentation/operators.html)
* [RxJS](https://github.com/ReactiveX/rxjs)

### Resources supplémentaires

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

En savoir plus sur l'[Injection de dépendances](https://angular.io/docs/ts/latest/guide/dependency-injection.html).

On peut utiliser l'api standard [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) qui retourne des [Promise ES2105](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).
ATTENTION au support par les navigateurs.
