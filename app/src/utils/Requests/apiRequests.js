export const fetchLeaderboard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([
      {
        "score": 3,
        "duration": 1230,
        "username": "Plop"
      },
      {
        "score": 10,
        "duration": 2131,
        "username": "Plop"
      },
      {
        "score": 5,
        "duration": 8023,
        "username": "Julien"
      },
      {
        "score": 35,
        "duration": 8023,
        "username": "Alfred"
      },
      {
        "score": 1,
        "duration": 8023,
        "username": "Hubert de la marne"
      },
      {
        "score": 3,
        "duration": 8023,
        "username": "Julien2"
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
