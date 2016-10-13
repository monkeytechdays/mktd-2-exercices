import React from 'react'
import AnswerList from './AnswerList'
import Button from '../../utils/View/Button'
import './Question.css'

class Form extends React.Component {
  render () {
    return (
      <form className='question-form'>
        <AnswerList
          answers={this.props.answers}
        />
        <Button>Valider</Button>
      </form>
    )
  }
}

Form.propTypes = {
  answers: React.PropTypes.array.isRequired
}

const Content = (props) => (
  <div className='question-content'>
    <h2>{props.label}</h2>
    <Form answers={props.answers} />
  </div>
)

Content.propTypes = {
  label: React.PropTypes.string,
  answers: React.PropTypes.array.isRequired
}

export default Content
