const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_PEOPLE':
      return [...state, action.payload]
    case 'CLEAR_PEOPLE_LIST': 
      return []
    default:
      return state
  }
}

export default reducers