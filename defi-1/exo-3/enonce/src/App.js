import React from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Quizz from './Quizz'

function App () {
  const user = {
    firstname: 'Prénom',
    lastname: 'NOM'
  }

  return (
    <div className='body'>
      <Header user={user}/>
      <main>
        <Quizz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
