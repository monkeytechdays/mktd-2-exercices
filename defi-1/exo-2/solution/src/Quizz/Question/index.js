import React from 'react'
import Photo from './Photo'
import Question from './Question'

export default function Quizz () {
  const question = {
    label: 'Quel est le nom de ce singe ?',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Gorilla_Eating.jpg/640px-Gorilla_Eating.jpg',
    answers: [
      {
        value: 'alouate',
        label: 'Alouate'
      },
      {
        value: 'babouin',
        label: 'Babouin'
      },
      {
        value: 'capucin',
        label: 'Capucin'
      },
      {
        value: 'gorille',
        label: 'Gorille'
      },
      {
        value: 'orang-outan',
        label: 'Orang-outan'
      }
    ]
  }
  return (
    <div className='main'>
      <Photo photo={question.photo} label={question.label} />
      <Question label={question.label} answers={question.answers} />
    </div>
  )
}
