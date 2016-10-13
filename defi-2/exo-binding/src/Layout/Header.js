import React from 'react'
import {Link} from 'react-router'

const Header = (props) => {
  // Récupérer le nom de l'utilisateur depuis le service injecté
  const user = TODO
  return (
    <header className='header'>
      <div className='brand'><Link to='/'><h1>Monkey Quizz</h1></Link></div>
      <div className='user'>{user || 'Anonyme'}</div>
    </header>
  )
}

Header.propTypes = {
}

// S'enregistrer au service pour accéder au nom de l'utilisateur
TODO
export default Header
