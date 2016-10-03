import React from 'react'
import Photo from './Photo'
import Content from './Content'

const label = 'Quel est ce singe ?'

export default (props) => (
  <div className='question'>
    <Photo photo={props.question.img} label={label} />
    <Content label={label} answers={props.question.responses} answer={props.answer} onSubmit={props.onSubmitAnswer} />
  </div>
)
