import React from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'

function App ({children}) {
  const user = 'Julien'

  return (
    <div className='body'>
      <Header user={user} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default App;
