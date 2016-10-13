# Petites notes stylistiques

1- J'utilise standardjs.

2- J'essaye de ne pas utiliser trop de javascript qui n'est pas de l'ES6 (a part
  pour le spread sur les objets). Ainsi, les HOCs peuvent paraître illisibles
  parce qu'ils n'utilisent pas les décorateurs. Cependant, en temps normal,
  j'utilise recompose (https://github.com/acdlite/recompose) et donc un machin pas
  trop buvable comme :
  ```
  HocA()(
    HocB(param)(
      HocC(param, param, param)(Composant)
    )
  )
  ```
  devient :
  ```
  compose(
    HocA(),
    HocB(param),
    HocC(param, param, param)
  )(Composant)
  ```
  Ce qui est quand même très proche d'un décorateur, sans avoir le risque de
  changer mon implémentation si la spec change

3- Mon but est de montrer tout de bout en bout. Il n'est pas nécessaire de tout
savoir pour commencer à faire du React. Et surtout il est sûrement plus
intélligent d'utiliser des librairies toutes prêtes. Cependant, cela permet de
voir des cas concret d'utilisations qui montre la force de React.
