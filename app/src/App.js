import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import UserService from './utils/Services/UserService'
import ServiceContainer from './utils/Services/ServiceContainer'

function App ({children}) {
  // Les children est la route fille qui est matchée dans src/index.js
  return (
    <div className='body'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

// C'est lui qui va permettre d'héberger le service User
// Il serait possible de faire un singleton global qu'il suffirait d'importer.
// Cependant, cette pratique est considérée comme mauvaise si l'on veut pouvoir
// changer de service, le réinitialiser ou plus simplement faire des tests
export default ServiceContainer({
  service: UserService(),
  name: 'userService'
})(App)
