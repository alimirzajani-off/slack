export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};
