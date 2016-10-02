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

export const submitQuizz = (responses) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve())
  })
}
