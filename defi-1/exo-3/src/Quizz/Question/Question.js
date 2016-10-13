import React from 'react'
import Photo from './Photo'
import Content from './Content'

const label = 'Quel est ce singe ?'

const Question = (props) => (
  <div className='question'>
    <Photo src={props.question.url} />
    <Content
      label={label}
      answers={props.question.responses}
    />
  </div>
)

Question.propTypes = {
  question: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    responses: React.PropTypes.array.isRequired
  }).isRequired
}

export default Question
