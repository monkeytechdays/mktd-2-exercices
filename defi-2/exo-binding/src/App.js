import React from 'react'
import './Layout/Layout.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

const App = (props) => {
  // Les children est la route fille qui est matchée dans src/index.js
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
}

/*
 * C'est lui qui va permettre d'héberger le service User
 * Il serait possible de faire un singleton global qu'il suffirait d'importer.
 * Cependant, cette pratique est considérée comme mauvaise si l'on veut pouvoir
 * changer de service, le réinitialiser ou plus simplement faire des tests
 */
// Injecter le service dans l'application pour le rendre accessible partout
TODO
export default App
