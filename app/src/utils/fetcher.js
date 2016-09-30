import React from 'react'
import Rx from 'rxjs/Rx'

export const fetchLeaderboard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([
      {
        "score": 12,
        "duration": 1230,
        "username": "Plop"
      },
      {
        "score": 10,
        "duration": 2131,
        "username": "Plop"
      },
      {
        "score": 0,
        "duration": 8023,
        "username": "Julien"
      }
    ]), 200)
  })
}

export const fetchQuizz = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      "id": "b6797b0b-ed7c-42ec-b584-f3a39e9179c0",
      "questions": [
        {
          "responses": [
            "Orang Outan",
            "Atèle",
            "Hurleur du Guatemala",
            "Chimpanzé"
          ]
        }, {
          "responses": [
            "Orang Outan",
            "Atèle"
          ]
        }
      ],
      "username": username
    }), 200)
  })
}

export const HOC = ({ propsToRequest, addResultToProps }) => (BaseComponent) => {
  if (!addResultToProps) {
    addResultToProps = ({data, loading, refreshing}, props) => ({
      ...props,
      data,
      loading,
      refreshing
    })
  }

  return class Fetcher extends React.Component {
    constructor () {
      super()
      this.state = {
        data: null,
        loading: true,
        refreshing: false
      }
    }

    componentWillMount () {
      this.fetchData(this.props)
    }

    componentWillUpdate (props) {
      if (this.props !== props) {
        this.fetchData(props)
      }
    }

    fetchData (props) {
      if (this.currentRequest) {
        this.currentRequest.unsubscribe()
      }

      this.setState((state) => ({
        data: state.data,
        loading: !state.data,
        refreshing: !!state.data
      }))

      this.currentRequest = Rx.Observable
        .fromPromise(propsToRequest(this.props))
        .do((leaderboard) => this.setState((state) => ({
          loading: false,
          refreshing: false,
          data: leaderboard
        })))
        .subscribe()
    }

    render () {
      return <BaseComponent {...addResultToProps(this.state, this.props)} />
    }
  }
}
