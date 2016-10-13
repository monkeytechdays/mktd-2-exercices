/*
 * Cette base de service est ce qui va permettre au service de notifier les subscribers
 * d'une mise à jour de donnée.
 * Il est écrit de manière fonctionnelle, mais vous pouvez voir cela comme une classe
 * abstraite si vous préférez une approche objet.
 */
export default () => {
  let subscriptions = []

  const notifySubscriptions = () => {
    subscriptions.forEach((subscription) => {
      subscription.notify()
    })
  }

  return {
    notifySubscriptions: notifySubscriptions,
    subscribe: (ref) => subscriptions.push(ref),
    unsubscribe: (ref) => subscriptions = subscriptions.filter((subscription) => subscription !== ref)
  }
}
