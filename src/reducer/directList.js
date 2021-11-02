export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DIRECT_LIST':
      return action.payload
    default:
      return state
  }
}
