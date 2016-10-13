import React from 'react'
import './Layout/Layout.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Quizz from './Quizz'

const App = (props) => {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <Quizz />
      </main>
      <Footer />
    </div>
  )
}

export default App
