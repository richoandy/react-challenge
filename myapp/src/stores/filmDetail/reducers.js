import {
  GET_FILM_LOADING,
  GET_FILM_ERROR,
  GET_FILM_SUCCESS,
} from './action.types'

const initialState = {
  loading: false,
  error: {
    status: false,
    message: ''
  },
   data: []
}

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_FILM_LOADING:
      return {
        ...state,
        loading: true
      }
    
    case GET_FILM_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action.message
        }
      }
    
    case GET_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default: 
      return state
  }
}

export default reducers