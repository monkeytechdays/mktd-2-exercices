import React from 'react'
import Photo from './Photo'
import QuestionContent from './Question'

export default function Question (props) {
  return (
    <div className='main'>
      <Photo photo={props.question.photo} label={props.question.label} />
      <QuestionContent label={props.question.label} answers={props.question.answers} />
    </div>
  )
}
