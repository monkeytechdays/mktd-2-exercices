/*
 * J'utilise les fichiers index.js parce que généralement lorsque je développe
 * je commence par faire un fichier `src/Quizz.js` qui se complexifie rapidement et
 * a besoin d'être splité et donc mis dans un dossier à part entière. Donc tous
 * mes autres composants qui importaient `src/Quizz` doivent être changés en
 * `src/Quizz/Quizz`. L'astuce du index.js permet d'éviter cette étape puisqu'il
 * est chargé automatiquement si src/Quizz est un dossier.
 */
import QuizzContainer from './QuizzContainer'
import './Quizz.css'

export default QuizzContainer
