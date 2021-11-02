export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHANNEL_LIST':
      return action.payload
    default:
      return state
  }
}
