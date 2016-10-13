// Simulation d'une requête fetch

export const fetchQuestion = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Gorilla_Eating.jpg/640px-Gorilla_Eating.jpg',
        responses: [
          'Alouate',
          'Babouin',
          'Capucin',
          'Gorille',
          'Orang-outan'
        ]
      })
    }, 1000)
  })
}
