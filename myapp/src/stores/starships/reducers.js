import {
  GET_ALL_STARSHIPS_LOADING,
  GET_ALL_STARSHIPS_ERROR,
  GET_ALL_STARSHIPS_SUCCESS,
  CLEAR_STARSHIPS_LIST
} from './action.types'

const initialState = {
  loading: false,
  error: {
    status: false,
    message: ''
  },
  data: []
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case GET_ALL_STARSHIPS_LOADING:
    return {
      ...state,
      loading: true
    }
  case GET_ALL_STARSHIPS_ERROR:
    return {
      ...state,
      loading: false,
      error: {
        status: true,
        message: action.message
      }
    }
  case GET_ALL_STARSHIPS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: [...state.data, action.payload]
    }
    case CLEAR_STARSHIPS_LIST: 
    return {...initialState}
    default:
      return state
  }
}

export default reducers