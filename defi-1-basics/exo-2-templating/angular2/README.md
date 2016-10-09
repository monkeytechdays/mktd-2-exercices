Templating basic avec Angular2
===

Timing: maxi 30 minutes

Objectif
---

Comprendre les bases du templating d'Angular2.

A Faire
---

Faire fonctionner le composant `QuestionComponent` dans le répertoire `src/client/app/quizz/question`
Normalement vous n'avez que le fichier `question.component.html` à modifier, mais vous devrez regarder le contenu du fichier `question.component.ts`.

Pour démarrer l'application il faut récupérer les dépendances avec `npm install`.

Pour lancer en mode développement il suffit de lancer `npm start`.

> Cette application a été initialisée à partir d'[angular-seed](https://mgechev.github.io/angular-seed/). Vous pouvez ultérieurement regarder plus en détail la documentation et le wiki de ce projet.

Présentation
---

Le templating dans Angular2 à toujours lieu dans un Composant Angular2.

ATTENTION, il n'y a plus le concept de $scope, ni de contrôleur dans Angular2.

### Interpolation

Comme dans AngularJS on peut utiliser la notation `{{expression}}` pour afficher le contenu de l'expression. Il est bien sur recommandé d'avoir des expressions simples comme l'attribut de notre composant, on un appel à une de ses méthodes.

> Il y a des restrictions sur le type d'expression pour des raisons de sécurité.

Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#interpolation>

### Binding Composant -> Vue

Pour Binder une expression (par exemple un attribut de notre composant) à une propriété d'un élément du DOM HTML on utilise la notation `<balise [propriété]="expression">...</balise>`.

> ATTENTION le binding se fait sur la propriété de l'élément DOM et non sur l'attribut HTML ! N'hésitez pas à consulter la documentation des [HTMLXxxElement](https://developer.mozilla.org/en-US/docs/Web/API).

Ceci permet de diminuer le nombre de directives (voir plus bas) dans Angular 2, par exemple les `ng-show` et `ng-hide` n'existe plus, on peut facilement les remplacer par ceci: `[style.visibility]="isVisible()"`.

Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding>

### Binding Vue -> Composant

Lorsqu'un comportement de l'utilisateur doit avoir une action sur le modèle, on utilise la notation `<balise (événement)="methode()">...</balise>` qui associe un événement à un appel de méthode.
On peut utiliser `$event` dans l'appel à la méthode pour récupérer l'évènement.

> Vous trouverez sur [MDN](https://developer.mozilla.org/en-US/docs/Web/Events) la documentation des événements HTML standard.

Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding>

### Binding bidirectionnel Composant <-> Vue

Pour faire un binding bidirectionnel on utilise une notation qui combine les deux notations précédentes.
On utilise typiquement cette notation pour associer notre modèle avec un champs de formulaire, par exemple: `<input [(ngModel)]="attribut">`.

Un moyen mnémotechnique pour ne pas se tromper sur la notation, on peut mémorisé *Banana Box*, i.e. une boite de bananes (un banane contenant une boite n'ayant pas de sens).

Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel>

### Directives

L'utilisation du binding de propriété DOM rend obsolète beaucoup de directive d'AnguarJS 1.x comme par exemple le toggle de classe CSS avec: `[class.special]="isSpecial()"`.
Mais tout n'est pas réalisable avec ce mécanisme, et parfois cela peut nuire à la lisibilité du template, il y a toujours la notation de directive. 

> Les directives qui permettent de modifier programmatiquement le DOM (structural directive) à l'aide du mécanisme de `template` HTML peut utiliser un sucre syntaxique en préfixant la directive par `*`.

Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#directives> en particulier le `ngIf`
 et le `ngFor`.

Ressources
---

* [Afficher des données](https://angular.io/docs/ts/latest/guide/displaying-data.html)
* [Syntaxe](https://angular.io/docs/ts/latest/guide/template-syntax.html)
* [API ngIf](https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html)
* [API ngFor](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html)

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

Il y a un exercice dans le défi 2 sur le templating avancé.

On peut utiliser des [Pipes](https://angular.io/docs/ts/latest/guide/pipes.html) dans les expressions comme les filtres d'AngularJS.

On peut ajouter nos propres évènements avec `@Output` dans notre composant. Voir <https://angular.io/docs/ts/latest/guide/template-syntax.html#!#inputs-outputs>

Pour créer ses propres directives, regarder: <https://angular.io/docs/ts/latest/guide/structural-directives.html>