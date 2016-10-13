import React from 'react'
import Photo from './Photo'
import Content from './Content'
import {fetchQuestion} from '../../utils/Requests/apiRequests'
import Fetcher from '../../utils/Requests/Fetcher'

const label = 'Quel est ce singe ?'

const Question = (props) => (
  <div className='question'>
    <Photo loading={props.loading} src={props.image && props.image.url} />
    <Content
      label={label}
      answers={props.question.responses}
      answer={props.answer}
      onSubmit={props.onSubmitAnswer}
    />
  </div>
)

Question.propTypes = {
  index: React.PropTypes.number.isRequired,
  quizz: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired
  }).isRequired,
  question: React.PropTypes.shape({
    responses: React.PropTypes.array.isRequired
  }),
  image: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    attribution: React.PropTypes.string.isRequired
  }),
  answer: React.PropTypes.string,
  onSubmitAnswer: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired
}

export default Fetcher({
  propsToRequest: (props) => fetchQuestion(props.quizz.id, props.index),
  addResultToProps: (props) => ({data, loading, refreshing}) => ({
    ...props,
    loading: loading || refreshing,
    image: data
  })
})(Question)
