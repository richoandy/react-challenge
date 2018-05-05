import {ADD_NEW_FAVORITES, DELETE_FAVORITE} from './action.types'


const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_FAVORITES:
      return [action.payload, ...state]
    case DELETE_FAVORITE: 
      return [...action.payload]
    default: 
      return state
  }
}

export default reducers