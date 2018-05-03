const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_STARSHIPS':
      return [...state, action.payload]
    case 'CLEAR_STARSHIPS_LIST': 
      return []
    default:
      return state
  }
}

export default reducers