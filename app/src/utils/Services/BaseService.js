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
