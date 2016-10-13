# MKTD#2: Templating

## Qu'est-ce qu'un composant ?

Un composant est un bout d'application. Il a une vie qui lui est propre et est controllé par son parent. Cette page de documentation explique très bien comment il faut faire pour réfléchir en composant : https://facebook.github.io/react/docs/thinking-in-react.html

Un exemple pour ceux qui sont plutôt du genre TL;DR :

* Un composant global qui contient :
  * Une liste de composants qui décrivent chacun un élément de la liste. Eux mêmes contiennent :
    * Un composant qui contient le contenu de l'élément
    * Un composant qui permet de cocher l'élément
  * Un formulaire qui permet d'ajouter un élément dans la liste. Il contient :
    * Un composant qui gère le champ du formulaire
    * Un composant qui est le bouton de soumission du formulaire
  * Une barre qui contient les filtres des todos finis/en cours
  * ...

## Comment écrire un composant ?

### JSX

Nous utilisons le JSX. C'est une syntaxe qui permet d'avoir l'impression d'écrire un simili HTML dans notre code JS. Le fichier est ensuite compilé et transformé en du JS normal.

[Vous pouvez jouer ici pour mieux comprendre.](https://babeljs.io/repl/#?babili=false&evaluate=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&experimental=true&loose=false&spec=false&playground=true&code=const%20StatelessComponent%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20return%20%3Cdiv%3E%0A%20%20%20%20%7Bprops.children%7D%0A%20%20%3C%2Fdiv%3E%0A%7D%0A%0Aconst%20test%20%3D%20%3CStatelessComponent%3E%0A%20%20Hello%20World%0A%3C%2FStatelessComponent%3E)

Ainsi, il faut utiliser cette syntaxe :

```
<div>
  <h1>Titre de mon application</h1>
  <p>Bonjour le monde</p>
</div>
```

Pour utiliser du javascript dans votre code JSX, il faut l'encadrer par des accolades :

```
var name = 'Julien'

<div>
  <h1>{Titre de mon application</h1>
  <p>Bonjour {name}</p>
</div>
```

### Composant

Pour écrire et utiliser un composant, il faut l'écrire ainsi :

```
function Hello(props) {
  return <p>{props.name}</p>
}

<Hello name='Julien' />
```

Quelques spécificités :

* Un composant perso doit toujours commencer par une majuscule. Sinon, un élément du DOM du même nom sera créé plutôt que d'utiliser votre composant.
* Si vous voulez utiliser le contenu du tag (ce qu'il y a entre les balises), il faut utiliser `props.children`
* Certaines propriétés (~ attributs au sens HTML) sont différents du HTML pur :
  * `class` => `className`
  * `for` => `htmlFor` (pour les `<label>`)

## Exercice

* Reprendre l'application créée à partir de Creat React App
* Faire en sorte qu'elle affiche l'équivalent de la page HTML `./enonce/index.html`
* Faire remonter le contenu variable dans les composants parents (Header, Quizz, Footer)
* Important : Faire en sorte d'afficher la liste des réponses à partir d'une variable qui est un tableau qui contient les réponses possibles.
* Bonus : Ne pas faire plus de 5 lignes de JSX à la suite.
