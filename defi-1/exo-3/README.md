# MKTD#2: AJAX

## Qu'est qu'un composant stateful ?

Les composants que l'on a vu dans l'exercice 2 sont les Composants Stateless. Ils existe un autre type de composant : les Componsants Statefuls.

L'idée de ces composants, c'est qu'ils vont pouvoir stocker des données à l'intérieur d'eux même au cours de leur vie. On appelle ça l'état. Pour le gérer il faut écrire les composants différemment : à base de classe.

```
class Counter extends React.Component {
  constructor () {
    super()
    this.state = 0 // Définition du state au démarrage du composant
    this.incrementState = this.incrementState.bind(this) // Pour ne jamais perdre la référence du this à l'intérieur de la fonction incrementState
  }

  incrementState () {
    this.setState((state) => {
      // la variable state contient le dernier state
      return state + 1
    })
  }

  render () {
    <div>
      <div>{this.state} hits</div>
      <button onClick={this.incrementState}>+1</button>
    </div>
  }
}
```

## Lifecycle des composants

Pour gérer le cycle de vie d'un composant, il existe tout un tas de méthode qui permettent de se hooker à une étape du composant.

cf. [Documentation](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

Cela permet notamment de savoir si le composant vient d'être rendu pour la première fois, s'il a reçu de nouvelles propriétés, etc. Dès que l'on fait de l'asynchrone c'est généralement indispensable.

## Exercice

* Récupérer la question depuis l'API
* Transformer le fichier src/Quizz/index.js en Composant Stateful afin qu'il récupère la question via une requête AJAX.
* Lancer la requête lorsqu'un composant va arriver pour la première fois sur la page.
* Bonus : Faire en sorte que l'id soit une propriété du composant Quizz et la changer dans le temps (à l'aide d'un bouton par exemple)

Outils :
* [API Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Tuto fetch API](https://davidwalsh.name/fetch)
