# Quel est ce dossier ?

Ce dossier contient tous les éléments qui ne vous sont pas nécessaire de
comprendre de fond en comble. En effet, mon but en exposant ce dossier est de
montrer qu'en React, l'avantage majeur que l'on a, c'est qu'il est possible
d'adapter l'application à votre fonctionnement et non l'inverse.

## src/utils/Storage

Ceci est un exemple assez primitif de ce que peut être un HOC (Higher Order
Component). Ca peut faire peur, mais il faut se dire qu'un HOC n'est finalement
qu'un créateur de composant. Ce qui rajoute de la complexité c'est que
généralement les HOCs utilisent des composants en paramètre. Les signatures que
j'utilise sont de la forme :
`(paramsParticuliersDuHOC) => (ComposantDeDepart) => ComposantAmeliore)`

Ce cas particulier d'implémentation permet de récupérer une donnée dans un
localStorage et de stocker des propriétés dans un localStorage.

## src/utils/Requests

Ces composants montrent un exemple d'implémentation pour pouvoir récupérer des
données depuis un serveur et les ajouter en propriétés à nos composants.

Le point le plus intéressant est je pense la mémoization des requêtes (a.k.a.
mise en cache) qui montre vraiment la composabilité des composants et ce que
peut vous apporter cette architecture.

Exemple de librairie similaire : https://github.com/heroku/react-refetch

## src/utils/Services

Ceci est un exemple d'implémentation pour réussir à extraire les données de ses
composants afin de séparer peut être la logique métier de la logique applicative.

Généralement, les gens partent sur du redux. http://redux.js.org/ Cependant, je
pense que c'est souvent overkill et que malgré tout le bien que ca peut vous
apporter, si c'est fait trop tot (ex: vous apprenez React + Redux en même temps
alors que vous n'êtes pas familiers avec la programmation foncitonnelle), cela
risque surtout de vous perdre.

De fait, afin de ne pas perdre tous ceux qui n'ont jamais fait autre chose que
du MVC pour développer une application web, je voulais montrer un exemple
d'extraction de données qui ressemble aux systèmes de services plus 'classiques'.

## src/utils/View

Une bonne pratique est aussi de se défaire totalement des composants du DOM dans
nos composants applicatifs et de n'utiliser que des composants de vue bien
séparés. L'avantage de faire ceci est de n'avoir qu'une partie des composants
à migrer pour en faire une application React Native.

Ici afin de gagner du temps, je n'ai fait qu'un composant Bouton afin de les
homogénéiser à travers l'application, mais un bon exercice serait de s'interdire
toute utilisation de `div` et de `span` en dehors de ce dossier.
