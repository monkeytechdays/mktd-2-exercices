import React from 'react'
import ServiceSubscriber from '../utils/Services/ServiceSubscriber'

const Header = (props) => {
  const user = props.userService.data
  return (
    <header className='header'>
      <div className='brand'>
        {/* J'affiche un lien vers l'url : '/'' */}
        <TODO><h1>Monkey Quizz</h1></TODO>
      </div>
      <div className='user'>{user || 'Anonyme'}</div>
    </header>
  )
}

Header.propTypes = {
  userService: React.PropTypes.shape({
    data: React.PropTypes.string
  }).isRequired
}

export default ServiceSubscriber({name: 'userService'})(Header)
