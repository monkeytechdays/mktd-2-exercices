import React from 'react'

const Header = (props) => {
  const user = props.user
  return (
    <header className='header'>
      <div className='brand'><h1>Monkey Quizz</h1></div>
      <div className='user'>{user || 'Anonyme'}</div>
    </header>
  )
}

Header.propTypes = {
  user: React.PropTypes.string.isRequired
}

export default Header
